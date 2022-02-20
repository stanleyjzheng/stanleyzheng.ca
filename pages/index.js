import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export async function getStaticProps() {
  return {
    props: {
      title: 'Stanley Zheng',
      description: 'Smart contract engineer, machine learning enthusiast and researcher.',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'green',
      secondaryColor: 'cyan'
    },
  }
}

export default function Index(props) {
  const { title, description, image, primaryColor, secondaryColor } = props

  const GradientTitle = styled('h1', {
    backgroundSize: "100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    WebkitBoxDecorationBreak: "clone",
  })

  console.log(primaryColor)

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://stanleyzheng.ca" property="og:url" />
        <meta content={`https://stanleyzheng.ca${image}`} property="og:image" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
            <GradientTitle
              css={{
                backgroundImage: `linear-gradient(
                  135deg,
                  $${primaryColor} 0%,
                  $${secondaryColor} 100%
                );`,
              }}
            >
              { title }
            </GradientTitle>
              <p>
              {description}</p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: "center",
  display: "flex",
  margin: "0 auto",
  '@bp2': { width: 800 }
})