import { styled } from '../stitches.config'
import { Box } from './Box'
import * as React from 'react'
import { useRouter } from 'next/router'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'

export default function CommandBar(props) {
  const router = useRouter()

  const actions = [
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github-fg',
      section: 'Follow',
      perform: () => (window.open('https://github.com/stanleyjzheng', '_blank')),
      icon: <Icon className='ri-github-line' />,
    },
    // {
    //   id: 'twitter',
    //   name: 'Twitter',
    //   shortcut: ['f', 't'],
    //   keywords: 'go-twitter',
    //   section: 'Follow',
    //   perform: () => (window.open('https://twitter.com/stanleyjzheng', '_blank')),
    //   icon: <Icon className='ri-twitter-line' />,
    // },
    {
      id: 'devpost',
      name: 'Devpost',
      shortcut: ['f', 'd'],
      keywords: 'go-devpost-fd',
      section: 'Follow',
      perform: () => (window.open('https://devpost.com/stanleyjzheng', '_blank')),
      icon: <Icon className='ri-terminal-line' />,
    },
    {
      id: 'kaggle',
      name: 'Kaggle',
      shortcut: ['f', 'k'],
      keywords: 'go-kaggle-fk',
      section: 'Follow',
      perform: () => (window.open('https://www.kaggle.com/stanleyjzheng', '_blank')),
      icon: <Icon className='ri-line-chart-line' />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin-fl',
      section: 'Follow',
      perform: () => (window.open('https://linkedin.com/in/stanleyjzheng', '_blank')),
      icon: <Icon className='ri-linkedin-line' />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram-fi',
      section: 'Follow',
      perform: () => (window.open('https://instagram.com/photos_yyc', '_blank')),
      icon: <Icon className='ri-instagram-line' />,
    },

    // {
    //   id: 'copy',
    //   name: 'Copy URL',
    //   shortcut: ['u'],
    //   keywords: 'copy-url',
    //   section: 'General',
    //   perform: () => navigator.clipboard.writeText(window.location.href),
    //   icon: <Icon className='ri-file-copy-line' />,
    // },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email-e',
      section: 'General',
      perform: () => window.open('mailto:me@stanleyzheng.ca', '_blank'),
      icon: <Icon className='ri-mail-line' />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 's-view-source',
      section: 'General',
      perform: () => (window.open('https://github.com/stanleyjzheng/stanleyzheng.ca', '_blank')),
      icon: <Icon className='ri-braces-line' />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home-gh',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Icon className='ri-home-5-line' />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about-ga',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Icon className='ri-user-line' />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles-gb',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Icon className='ri-ball-pen-line' />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects-gp',
      section: 'Go To',
      perform: () => (router.push('/projects')),
      icon: <Icon className='ri-lightbulb-line' />,
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks-gt',
      section: 'Go To',
      perform: () => (router.push('/talks')),
      icon: <Icon className='ri-slideshow-2-line' />,
    },
    // {
    //   id: 'uses',
    //   name: 'Uses',
    //   shortcut: ['g', 'u'],
    //   keywords: 'go-uses',
    //   section: 'Go To',
    //   perform: () => (router.push('/uses')),
    //   icon: <Icon className='ri-computer-line' />,
    // },
  ]

  return <KBarProvider actions={actions}>
    <KBarPortal>
      <Positioner>
        <Animator>
          <Search placeholder='Type a command or search???' />
          <RenderResults />
        </Animator>
      </Positioner>
    </KBarPortal>

    {props.children}
  </KBarProvider>
}

function RenderResults() {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <Box ref={ref} css={getResultStyle(active)}>
      <Action>
        {action.icon && action.icon}
        <ActionRow>
          <span>{action.name}</span>
        </ActionRow>
      </Action>
      {action.shortcut?.length ? (
        <Shortcut aria-hidden>
          {action.shortcut.map((shortcut) => (
            <Kbd key={shortcut}>
              {shortcut}
            </Kbd>
          ))}
        </Shortcut>
      ) : null}
    </Box>
  )
})

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
})

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary',
})

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command',
})

const Icon = styled('i', {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px'
})

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
})

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: "$command",
    WebkitBackdropFilter: "saturate(300%) blur(25px)",
    backdropFilter: "saturate(300%) blur(25px)"
  }
})

const getResultStyle = (active) => {
  return {
    padding: '12px 16px',
    background: active ? '$hover' : '$command',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '$primary' : '$secondary',
  }
}
