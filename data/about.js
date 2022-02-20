const items = [
  {
    jobTitle: 'Founder, Smart Contract Engineer',
    company: 'Stealth Startup',
    startDate: '2021-02-01',
  },
  {
    jobTitle: 'Machine Learning Engineer',
    company: 'Inferex',
    companyUrl: 'https://inferex.com',
    startDate: '2021-08-01',
    endDate: '2021-10-13',
  },
  {
    jobTitle: 'Data Science Intern',
    company: 'Kings Distributed Systems',
    companyUrl: 'https://kingsds.network/',
    startDate: '2021-05-01',
    endDate: '2021-08-01',
    location: 'Kingston, Ontario',
  }
]

const education = [
  {
    school: 'Athabasca University',
    subtitle: '4.0/4.0 GPA',
    startDate: '2021-05-01',
    endDate: '2021-12-31',
  },
  {
    school: 'Sir Winston Churchill High School',
    subtitle: 'IB',
    startDate: '2019-09-01',
    endDate: '2022-05-01',
  }
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
        from: "University of Waterloo Euclid Math Contest",
        title: "23rd in Alberta",
        url: "https://stanleyzheng.ca/"
      },
      {
        from: "Mayor Nenshi Youth Central",
        title: "Innovation Award",
        url: "https://youthcentral.com/blog/category/programs/youth-of-distinction-awards/"
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
        url: 'https://github.com/stanleyjzheng/masseyhacksvii/',
      },
      {
        from: 'Borderhacks Winner',
        title: "First Place",
        url: 'https://github.com/stanleyjzheng/bridgehacks'
      },
      {
        from: "Radiological Society of North America Pulmonary Embolysm Challenge",
        title: "Silver Medal",
        url: 'https://github.com/stanleyjzheng/RSNA-STR'
      },
    ]
  },
  {
    year: '2020',
    awards: [
      {
        from: "University of Saskatchewan Global Wheat",
        title: "Silver Medal",
        url: 'https://github.com/stanleyjzheng/Global-Wheat'
      },
      {
        from: 'Ignition Hacks 2020 Datathon',
        title: "First Place",
        url: 'https://github.com/stanleyjzheng/ignitionhacks'
      },
      {
        from: 'BridgeHacks',
        title: "Best Environmental Hack",
        url: 'https://github.com/stanleyjzheng/BlueSky-AI'
      },
      {
        from: 'HackCamp (University of British Columbia)',
        title: 'Teck Resources Best Hack',
        url: 'https://devpost.com/software/drought-watch',
      },
    ]
  },
  {
    year: '2018',
    awards: [
      {
        from: "Purple Comet Math Contest",
        title: "First Place in Canada",
        url: "https://purplecomet.org/"
      }
    ]
  }
]

export default items

export { items, education, awards }