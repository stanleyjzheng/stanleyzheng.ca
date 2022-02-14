import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { getAllPosts } from '../lib/blog'
import ListItem from '../components/ListItem'
import FeaturedArticle from '../components/FeaturedArticle'
import { ListGroup } from '../components/ListGroup'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'date',
    'skip',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ])

  return {
    props: {
      title: 'Articles // Stanley Zheng',
      tagline: 'Stories. Updates. Guides.',
      image: '/static/images/articles-bw.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      allPosts,
    },
  }
}

function Articles(props) {
  const renderFeatured = () => {
    const featured = [
      'what-ive-learned-after-giving-100-talks',
      'how-i-built-my-personal-website',
    ]

    return props.allPosts
      .filter(item => featured.includes(item.slug))
      .map((post, index) => {
        return <FeaturedArticle
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      })
  }

  const renderAll = () => {
    return props.allPosts.map((post, index) => {
      if (!post.skip) {
        return <ListItem
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          date={post.date}
        />
      }
    })
  }

  const { title, image } = props
  const description = `Here you can find all of the articles I've written. You can read about data science, research, and in the future, PCB design and keyboards.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://stanleyzheng.ca/articles" property="og:url" />
        <meta content={`https://stanleyzheng.ca${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        {/* <h2>Featured Articles</h2>
        <FeaturedArticles>
          {renderFeatured()}
        </FeaturedArticles> */}

        <h2>All Articles</h2>
        <ListGroup>
          {renderAll()}
        </ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

const FeaturedArticles = styled('div', {
  margin: "10px 0 0 -20px",
  "@bp2": { display: "flex", justifyContent: "space-between" },
})

Articles.Layout = Base

export default Articles