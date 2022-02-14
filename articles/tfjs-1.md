---
title: "Tensorflow.js for PyTorch/Tensorflow developers Part 1"
description: "A guide for new users of Tensorflow.js."
slug: tfjs-1
date: "2021-07-06"
---

# Tensorflow.js datasets for PyTorch/Tensorflow developers Part 1: Data

## Table of Contents
1. Introduction
2. Data, Datasets/Dataloaders
3. Image augmentation pipelines
4. Special cases (multiple input models, transfer learning, etc.)

## 1. Introduction
In this series of posts, we explore Tensorflow.js with the goal of deployment and training of machine learning models in the browser. This article targets developers with familiarity in Tensorflow or PyTorch. With that goal in mind, we divide the tutorial in two sections: "For Tensorflow users" and "For PyTorch users". Each section translates code from Tensorflow/PyTorch to Tensorflow.js.

This post introduces data pipelines and common techniques in Tensorflow.js, and assumes `tfjs-v3.8.0`, released July 14, 2021. 

## 2. Data, Datasets, and Dataloaders
In the current version, Tensorflow.js does not offer some of the automatic dataloading functionality available through `tf.keras.preprocessing` or `Torchvision`. In this section, we explore how to get around the lack of automatic dataloaders in Tensorflow.js. 

For other techniques on image processing and image datasets, please refer to Section 8.

### 2.1. For Tensorflow Users
TODO | if using the example, "For example, instead of creating an image using this, we have to use that"

Tensorflow.js can read CSVs to create a dataset with `tf.data.csv(url, csvConfig)`. From `csvConfig`, specific column names and other parameters can be specified, along with `.map` for preprocessing. There are also various live inputs, including webcam and microphone. 
See [tensorflow.js tf.data.csv docs](https://js.tensorflow.org/api/latest/#data.csv) for more information.

For Tensorflow users, Tensorflow.js offers many of the same methods of creating data pipelines. 
We first discuss ways of converting data into datasets that can be inputted into Tensorflow.js.
Then, we explore custom datasets, which can lazy-load data.

Firstly, creating a dataset from a list in python:
```python=
dataset = tf.data.Dataset.from_tensor_slices([8, 3, 0, 8, 2, 1], dtype=tf.float32)
```

In Tensorflow.js, this is renamed, and either an array, or an array of objects can be inputted. 
```javascript=
const dataset = tf.data.array([8, 3, 0, 8, 2, 1])
const objectDataset = tf.data.array([{'item': 1}, {'item': 2}, {'item': 3}]);
```

Printing indices of a dataset is much easier in Tensorflow.js as well. 
For example, `await dataset.forEachAsync(entry => console.log(entry));` prints each entry out. 
Any arrow function can be used with this.

In addition, using `.map()` on datasets is identical to python, but arrow functions replace python's lambda functions. 
For example, in python:
```python=
dataset = dataset.map(lambda *items: tf.stack(items))
```
Meanwhile, in JavaScript, datasets have either `.map()`, or `.mapAsync()`, depending on usage of promises. For example, the above python code becomes
```javascript=
ds.map(({xs, ys}) => {return tf.stack([xs, ys])};
```

After the dataset has been built, Tensorflow.js offers identical functions for common operations such as `dataset.shuffle()`, `dataset.batch()`, etc.

The preferred method of dataloading in Tensorflow and Tensorflow.js for large datasets is a data generator - this is relatively more hassle in python, usually done by subclassing `tf.keras.utils.Sequence`. 
The following is an example of a data generator for an image with OpenCV. 

```python=
class TfDataGenerator(tf.keras.utils.Sequence):
    def __init__(self, filenames, targets):
        self.filenames = filenames
        self.targets = targets

    def __len__(self):
        return len(self.filenames) // self.batch_size

    def __getitem__(self, index):
        image = cv2.imread(self.filenames[index])
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        image /= 255.
        return tf.tensor(image), tf.tensor(self.targets[index])
```

Unfortunately, with this solution, the user's dataloader itself must implement batching and shuffling. 

However, with Tensorflow.js, there is first-class support for data generator functions, with JavaScript generators and `tf.data.generator`. 
The equivalent code using [sharp.js](https://www.npmjs.com/package/sharp) is as follows:
```javascript=
async function* dataGenerator(filenames, targets) {
    const numElements = filenames.length;
    let index = 0;

    while (index < numElements) {
        // read the image with Sharp.js
        let img = await sharp(filenames[index]);
        
        // yield works as it does in python
        // after dataGenerator.next() being called, it r eturns the next imaige and target
        // Tensorflow.js datagenerators return an object with keys xs and ys, corresponding to the feature and target
        yield {xs: tf.tensor(img), ys: tf.tensor(targets[index])}
        index++;
    }
}

const dataset = tf.data.generator(() => dataGenerator(filenames, targets));
```

`dataGenerator` only needs to yield the single feature and target corresponding to its index; Tensorflow.js can batch and parallelize your dataloader by calling the `dataloader.batch()` method. Alternatively, use a for loop or a function with a `next()` method that returns an incrementing index.

This `dataset` can be batched, shuffled, and prefetched similarly.

### 2.2. For PyTorch Users

Datasets in Tensorflow.js are very similar to PyTorch. Instead of a `__getitem__` method in a class, write it as a JavaScript generator function and call `tf.data.generator`. 
A minimal example of a PyTorch dataloader is as follows:
```python=
class MelanomaDataset(torch.utils.data.Dataset):
    def __init__(self, filenames, targets):
        self.filenames = filenames
        self.targets = targets

    def __len__(self):
        return len(self.filenames)

    def __getitem__(self, index):
        image = cv2.imread(self.filenames[index])
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        image /= 255.
        return torch.Tensor(image), torch.Tensor(self.targets[index])
```

The equivalent code using [sharp.js](https://www.npmjs.com/package/sharp) is as follows:
```javascript=
async function* dataGenerator(filenames, targets) {
    const numElements = filenames.length;
    let index = 0;

    while (index < numElements) {
        // read the image with Sharp.js
        let img = await sharp(filenames[index]);
        
        // yield works as it does in python
        // after dataGenerator.next() being called, it returns the next imaige and target
        // Tensorflow.js datagenerators return an object with keys xs and ys, corresponding to the feature and target
        yield {xs: tf.tensor(img), ys: tf.tensor(targets[index])}
        index++;
    }
}

const dataset = tf.data.generator(() => dataGenerator(filenames, targets));
```
`dataGenerator` only needs to yield the single feature and target corresponding to its index; Tensorflow.js can batch your dataloader by calling the `dataloader.batch()` method. Alternatively, use a for loop or a function with a `next()` method that returns the following index.

In order to batch our `dataGenerator`, we can use various functions such as `dataset.prefetch(numPrefetch)`, `dataset.batch(batchSize)`, `dataset.shuffle(numPrefetch)`.
More details can be found in [Tensorflow.js tf.data.Dataset documentation](https://js.tensorflow.org/api/latest/#class:data.Dataset)

Section 3 discusses image processing and image datasets further. 
Other dataset creation methods are also possible and explored in the section above, "For Tensorflow users," but is less similar to the PyTorch syntax. 

## 3. Image augmentation pipelines
Commonly, image augmentations in python are done with OpenCV, TorchVision, and Albumentations. 
While OpenCV does have a JavaScript binding, it is not as easy to use. 
Fortunately, a popular method of image reading and augmentations is [sharp.js](https://www.npmjs.com/package/sharp).
We must make a few adjustments for it to work well with Tensorflow.js.

The following albumentations transformations can be rewritten in JavaScript as follows:
```python=
# 50% chance of horizontal and vertical flip and always normalize
transforms = albu.Compose([
        albu.VerticalFlip(p=0.5),
        albu.HorizontalFlip(p=0.5),
        albu.Normalize(p=1.)
    ])
```

Sharp can both read images and apply augmentations instead of having a function exclusively for the augmentation of a ndarray.

However, it does not have a method of converting images into tensors, which we can write. 
The following function `apply()` can be called on a filename and will return a tensor of the augmented image.

```javascript=
function imageToTensor3d(pixelData, imageInfo) {
    const outShape = [imageInfo.channels, imageInfo.height, imageInfo.width];
    
    // tf.tidy for automatic memory cleanup
    return tf.tidy(() =>
        tf.tensor3d(pixelData, outShape, "float32")
    );
}

async function apply(filepath) {
    // read image
    let img = await sharp(filepath)

    // 50% chance of vertical and horizontal flips
    if (Math.random()>0.5) {
        img = img.flip();
    }
    if (Math.random()>0.5) {
        img = img.flop();
    }
    
    // always normalize image
    img = img.normalize();

    // convert to tensor
    let {data, info} = await img.raw().toBuffer({resolveWithObject: true});
    return imageToTensor(data, info);
}
```

Sharp offers many other augmentations than the ones above - please see [Sharp.js documentation](https://sharp.pixelplumbing.com/api-operation)

## 4. Pandas-like CSV manipulation 
Danfo.js is a great Pandas-like DataFrame library for JavaScript.
It uses Tensorflow.js, and as such, has excellent compatibility with Tensorflow.js.
Overall, the syntax is very similar to Pandas, with a few oddities.

Firstly, loading Danfo.js can be odd depending on your Tensorflow.js backend - I've found that if both are using CPU, it's better not to import both `danfojs-node` and `tensorflowjs-node` and rather do the following:
```javascript=
const dfd = require("danfojs-node");
const tf = dfd.tf;
```
If you import Tensorflow.js as well, some kernels are already loaded, and as a result, you get many warnings for `The kernel [kernel] for backend 'tensorflow' is already registered`. 

A few differences. 
First of all, dataframes can be converted to tensors and vice versa.
In addition, the syntax for queries has changed to be an object.

```javascript=
const dfd = require("danfojs-node");

let data = {"Name":["Apples", "Mango", "Banana", "Orange"],
            "Price": [200, 300, 40, 250]};
let df = new dfd.DataFrame(data);

// df.print() pretty prints df, equivalent to console.log(String(df)); or df.head() in python.
df.print();

// equivalent to df = df[df["column"] >= 50] in pandas
df = df.query({"column": "Price", "is": ">=", "to": 50});

df.print();

console.log(df.tensor);
```

Outputs:
```
╔═══╤═══════════════════╤═══════════════════╗
║   │ Name              │ Price             ║
╟───┼───────────────────┼───────────────────╢
║ 0 │ Apples            │ 200               ║
╟───┼───────────────────┼───────────────────╢
║ 1 │ Mango             │ 300               ║
╟───┼───────────────────┼───────────────────╢
║ 2 │ Banana            │ 40                ║
╟───┼───────────────────┼───────────────────╢
║ 3 │ Orange            │ 250               ║
╚═══╧═══════════════════╧═══════════════════╝

╔═══╤═══════════════════╤═══════════════════╗
║   │ Name              │ Price             ║
╟───┼───────────────────┼───────────────────╢
║ 0 │ Apples            │ 200               ║
╟───┼───────────────────┼───────────────────╢
║ 1 │ Mango             │ 300               ║
╟───┼───────────────────┼───────────────────╢
║ 3 │ Orange            │ 250               ║
╚═══╧═══════════════════╧═══════════════════╝

Tensor {
  kept: false,
  isDisposedInternal: false,
  shape: [ 3, 2 ],
  dtype: 'string',
  size: 6,
  strides: [ 2 ],
  dataId: {},
  id: 2,
  rankType: '2'
}
```

As such, Danfo.js is a pandas replacement which is well integrated with Tensorflow.js.

## 5. Conclusion

More to come on modelling and model conversion between tensorflow.js and python frameworks, as well as ONNX.