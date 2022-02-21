import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import stripHtml from '../lib/strip-html'
import { items, awards } from '../data/projects'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Stanley Zheng',
    tagline: 'Work. Hobby. Open Source.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'yellow',
  }

  return { props: meta }
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = [
      'PyData Boston Pseudolabelling Keynote',
      'Chest X-ray abnormalities localization',
      'Two Sigma: Halite IV PE'
    ]

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject
          key={index}
          project={item}
        />
      })
  }

  const renderAwards = () => {
    return awards.map((year, index) => {
      return <div key={index}>
        <h3>{year.year}</h3>
          {year.awards.map((award, pIndex) => {
            return <div> <ul><li> <p style={{ margin: 0 }}>
              <span>{ award.from } • </span>
            { award.url ?
              <a href={award.url} target="_blank">{award.title}</a> :
              <span>{award.title}</span> }
            </p></li></ul>
          </div>
          })}
      </div>
    })
  }

  const renderProjects = () => {
    return items.map((item, index) => {
      return <div key={index}>
        <h3>{item.year}</h3>
        <ul>
          {item.projects.map((project, pIndex) => {
            return <ProjectItem key={pIndex} project={project} />
          })}
        </ul>
      </div>
    })
  }

  const getTotalProjects = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length
    }

    return total
  }

  const { title, image } = props
  const description = `I'm obsessed with side projects and building. Here you can navigate to <strong>${getTotalProjects()} different</strong> websites, apps, and libraries I built for hackathons, competitions, or just for fun. Some projects are still active, most have been discontinued.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://stanleyzheng.ca/projects" property="og:url" />
        <meta content={`https://stanleyzheng.ca${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <FeaturedProjects>
          {renderFeatured()}
        </FeaturedProjects>

        <h2>Competitions</h2>
        { renderAwards() }

        <h2>All Projects</h2>
        {renderProjects()}
      </AnimateSharedLayout>
    </>
  )
}

function ProjectItem(props) {
  const { project } = props

  return <li>
    <a href={project.url} target="_blank">{project.title}</a>
  </li>
}

Projects.Layout = Base

export default Projects