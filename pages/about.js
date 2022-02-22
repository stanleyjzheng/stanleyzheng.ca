import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { Box } from '../components/Box'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { ButtonPrimaryIcon } from '../components/ButtonPrimaryIcon'
import { Icon } from '../components/Icon'
import stripHtml from '../lib/strip-html'
import { items, education, awards } from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Stanley Zheng',
    description: "Stanley Zheng",
    tagline: 'Stanley Zheng',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'darkBlue',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const pronunciationAudio = typeof Audio != 'undefined' ? new Audio('/static/audio/pronunciation.mp3') : null

  const renderIntro = () => {
    return <div>
        <Paragraph
          css={{
            marginTop: "16px",
            "@bp2": { marginTop: "-6px" },
          }}
        >
          I was born in 2004, and am a lifelong resident of Calgary, Canada. 
        </Paragraph>
      <Paragraph>I'm currently developing smart contracts - for the joy of optimization, and also for clients.
        I particularly enjoy the data side of blockchain, including MEV and chain/mempool analysis.
      </Paragraph>
      <Paragraph>Previously, I worked in MLOps at Inferex, and worked with hospitals on patient analytics at Kings Distributed Systems.</Paragraph>
      <Paragraph>I enjoy competitions - whether a Kaggle challenge, or hackathons. Check out  <a href="https://stanleyzheng.ca/projects">my projects</a> for more.</Paragraph>
      </div>
  }

  const renderBio = () => {
    return <div>
      <p>This is made for journalists, podcast hosts, and event organizers to copy-and-paste.</p>
      <blockquote><p>{description}</p></blockquote>
      <p>
        <ButtonPrimary
          as="button"
          onClick={copyBio}
        >
          <ButtonPrimaryIcon className="ri-file-copy-line"/> Copy to Clipboard
        </ButtonPrimary>
        <span style={{ margin: '0 20px 0 10px' }}>•</span>
        <ButtonPrimary
          as="a"
          download
          role="button"
          href="/static/images/zeno.png"
        >
          <ButtonPrimaryIcon className="ri-download-2-line" /> Download Headshot
        </ButtonPrimary>
      </p>
    </div>
  }

  const renderEducation = () => {
    return education.map((item, index) => {
      return <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.school}</h3>
        <p style={{ margin: 0 }}>
          <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
          <span> – </span>
          <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span>
          {/* <span> • </span> */}
          <span></span>
        </p>
      </div>
    })
  }

  const renderAwards = () => {
    return awards.map((year, index) => {
      return <div key={index}>
        <h3>{year.year}</h3>
          {year.awards.map((award, pIndex) => {
            return <div> <p style={{ margin: 0 }}>
              <span>{ award.from } • </span>
            { award.url ?
              <a href={award.url} target="_blank">{award.title}</a> :
              <span>{award.title}</span> }
            </p>
          </div>
          })}
      </div>
    })
  }


  const renderCareer = () => {
    return items.map((item, index) => {
      return <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.jobTitle}</h3>
        <p style={{ margin: 0 }}>
          {item.companyUrl ? <a href={item.companyUrl} target="_blank">
              {item.company}</a> :
            <span>{item.company}</span> }
          { item.location ? <span> • {item.location}</span> : null}
        </p>
        <p style={{ margin: 0 }}>
          <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
          <span> – </span>
          <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span>
          {/* <span> • </span>
          <span>{getDuration(item.startDate, item.endDate)}</span> */}
        </p>
      </div>
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    }
    else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  const copyBio = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(description)
  }

  const playPronunciation = () => {
    if (pronunciationAudio) {
      pronunciationAudio.currentTime = 0
      pronunciationAudio.play()
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://stanleyzheng.ca/about" property="og:url" />
        <meta content={`https://stanleyzheng.ca${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Career</h2>
      {renderCareer()}
      <h2>Education</h2>
      {renderEducation()}
      <h2>Awards</h2>
      {renderAwards()}
    </>
  )
}

const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: 'row' }
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' }
})

const Section = styled('div', {
  marginTop: "0px",
  width: "auto",
  "@bp2": { width: "48%" },
})

const ButtonPlay = styled('button', {
  background: "transparent",
  border: "none",
  color: "$primary",
  cursor: "pointer",
  margin: "0 4px",
  padding: "0",
  position: "relative",
  top: "5px",
  transform: "none",
  transition: "transform 0.2s ease-in-out",
  "&:hover": { transform: "scale(1.1) translateZ(0)" }
})

About.Layout = Base

export default About