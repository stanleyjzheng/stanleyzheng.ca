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
        from: "University of Waterloo Euclid Math Contest",
        title: "23rd in Alberta",
        url: "https://stanleyzheng.ca/"
      },
      {
        from: "Mayor Nenshi Youth Central",
        title: "Innovation Award",
        url: "https://youthcentral.com/blog/category/programs/youth-of-distinction-awards/"
      }
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