const items = [
  {
    year: '2021',
    projects: [
      {
        title: 'Chest X-ray abnormalities localization',
        url: 'https://ieeexplore.ieee.org/document/9598342',
        stats: 'IEEE Paper',
        icon: 'book-2',
        active: true,
      },
      {
        title: 'PyData Boston Pseudolabelling Keynote',
        url: 'https://github.com/stanleyjzheng/PyData-Pseudolabelling-Keynote',
        stats: 'Accompanying code for presentation with 200+ attendees',
        icon: 'live'
      },
      {
        title: 'Two Sigma: Halite IV PE',
        url: 'https://www.kaggle.com/c/halite-iv-playground-edition/leaderboard',
        stats: '1st place',
        icon: 'medal'
      },
      {
        title: 'Stegano',
        url: 'https://github.com/stanleyjzheng/stegano',
        active: false,
      },
      {
        title: 'Open4Collab',
        url: 'https://github.com/kperath/HackPrinceton'
      },
      {
        title: "Pulse.IT",
        url: 'https://github.com/Greg-Tarr/Pulse'
      },
      {
        title: 'MetaSkin',
        url: 'https://github.com/stanleyjzheng/masseyhacksvii/',
        active: false
      },
      {
        title: 'DCP COVID-19',
        url: 'https://github.com/stanleyjzheng/bridgehacks'
      },
      {
        title: "Radiological Society of North America Pulmonary Embolysm Challenge",
        url: 'https://github.com/stanleyjzheng/RSNA-STR'
      },
      {
        title: "Harvard LISH-MoA Baseline NN with K-Folds",
        url: 'https://www.kaggle.com/stanleyjzheng/baseline-nn-with-k-folds'
      },
      {
        title: "YOLOv4 Pseudolabelling + OOF Evaluation",
        url: 'https://www.kaggle.com/stanleyjzheng/yolov4-pseudolabelling-oof'
      },
      {
        title: "A demonstration of convolutional neural networks on tabular data",
        url: 'https://www.kaggle.com/stanleyjzheng/moa-convolutional-neural-net-on-tabular-data'
      },
      {
        title: "NFNet - First Opensource PyTorch Image Models Conversion",
        url: "https://www.kaggle.com/stanleyjzheng/timm-nfnet"
      }
    ]
  },
  {
    year: '2020',
    projects: [
      {
        title: 'Drought Watch',
        url: 'https://github.com/stanleyjzheng/drought-watch',
        active: true,
      },
      {
        title: "University of Saskatchewan Global Wheat",
        url: 'https://github.com/stanleyjzheng/Global-Wheat'
      },
      {
        title: 'Project Sigma',
        url: 'https://github.com/stanleyjzheng/ignitionhacks'
      },
      {
        title: 'BlueSky AI',
        url: 'https://github.com/stanleyjzheng/BlueSky-AI'
      },
      {
        title: 'RSNA-STR 256x256 TFRecords',
        url: 'https://www.kaggle.com/stanleyjzheng/rsna-str-tfrec'
      },
      {
        title: 'COVID-GoogleNet',
        url: 'https://github.com/stanleyjzheng/COVID-GoogleNet'
      },
      {
        title: 'PopQ!',
        url: 'https://github.com/stanleyjzheng/IOhackHackathon2020'
      },
      {
        title: "COVID-ResNet",
        url: 'https://github.com/stanleyjzheng/COVID-ResNet'
      },
    ]
  },
]

const awards = [
  {
    year: '2021',
    awards: [
      {
        from: 'Two Sigma',
        title: 'Halite IV 1st Place',
        url: 'https://www.kaggle.com/c/halite-iv-playground-edition/leaderboard',
      },
      {
        from: 'UofTHacks (University of Toronto)',
        title: 'Finalist, $11,500 1517 grant for most unique hack',
        url: 'https://devpost.com/software/stegano-end-to-end-steganlaysis-tool',
      },
      {
        from: 'HackPrinceton (Princeton)',
        title: "Best Use of @ API",
        url: 'https://devpost.com/software/open4collab-social-media-for-developers'
      },
      {
        from: "Sigmoid Hacks",
        title: "First Place, Best Neural Network From Scratch",
        url: 'https://devpost.com/software/pulse-it'
      },
      {
        from: 'Massey Hacks VII',
        title: "First Place",
        url: 'https://devpost.com/software/metaskin-or-something-like-that',
      },
      {
        from: 'Borderhacks',
        title: "Best Use of DCL",
        url: 'https://devpost.com/software/the-future-epidemic-predictor'
      },
      {
        from: "Radiological Society of North America Pulmonary Embolism Challenge",
        title: "Silver Medal",
        url: 'https://www.kaggle.com/c/rsna-str-pulmonary-embolism-detection/discussion/193400'
      },
    ]
  },
  {
    year: '2020',
    awards: [
      {
        from: "University of Saskatchewan Global Wheat",
        title: "Silver Medal",
        url: 'https://www.kaggle.com/c/global-wheat-detection/discussion/175922'
      },
      {
        from: 'Ignition Hacks 2020 Datathon',
        title: "First Place",
        url: 'https://devpost.com/software/project-sigma-submission-nlp'
      },
      {
        from: 'BridgeHacks',
        title: "Best Environmental Hack",
        url: 'https://devpost.com/software/bluesky-ai'
      },
      {
        from: 'HackCamp (University of British Columbia)',
        title: 'Teck Resources Best Hack',
        url: 'https://devpost.com/software/drought-watch',
      },
    ]
  },
]

export default items

export { items, awards }
