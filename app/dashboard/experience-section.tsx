import Link  from "next/link"

enum Experience {
  node_js = "Node.js",
  express = "Express.js",
  server_side_rendering = "SSR (server-side-rendering)",
  remix = "Remix.js",
  SSR = "SSR",
  complex_api_integration = "Complex API integration",
  react = "React",
  sql= "SQL",
  graphql = "GraphQL",
  data_intensive_application = "Data intensive application",
  query_optimization = "Query optimization",
  postgresql = "PostgreSQL",
  prisma = "Prisma",
  digital_ocean = "Digital Ocean",
  typescript = "Typescript",
  git="GIT",
  github = "Github",
}

export const ExperienceSection = () => {

  const educationDetails:EducationSectionDetails[] = [
    {
      year:"April,2024 - August,2024",
      institution: "National University",
      degree: "Bachelors of Business Administration",
      brief: "I completed bachelors of Business Administration",
    },

  ]

  const educationDetails_2:EducationSectionDetails[] = [
    {
      year:"April,2024 - August,2024",
      institution: "Company: Wenexus",
      degree: "Software Developer (Internship)",
      brief: "Got the certificate from here.",
    },
    {
      year:"2014-2015",
      institution: "Chakaria Korak Biddya Pith",
      degree: "Secondary School Certificate",
      brief: "I completed my secondary school certificate from science major.",
    }
  ]


  const experienceDetails_1:ExperienceDetails[] = [
    {
      year:"April,2024 - August,2024",
      skills:[Experience.react, Experience.remix, Experience.node_js, Experience.express, Experience.server_side_rendering, Experience.node_js, Experience.graphql, ],
      company: "Wenexus",
      position: "Software Developer (Internship)",
      responsibilities: [
        "Database automation via webhook",
        "Developed  Single Sign-On (SSO) application",
        "Integrated Third-party API with application.",
      ]
    }
  ]

  const experienceDetails_2:ExperienceDetails[] = [
    {
      year:"August, 2024 - Current",
      skills:[Experience.server_side_rendering, Experience.postgresql, Experience.complex_api_integration, Experience.sql, Experience.graphql, Experience.git, Experience.github, Experience.query_optimization, Experience.data_intensive_application, Experience.prisma, Experience.digital_ocean, Experience.typescript],
      company: "Wenexus",
      position: "Back-End Developer",
      responsibilities: [
        "Developed performant data intensive application",
        "Integrated complex API with application using GraphQL",
        "Designed and implemented efficient database schemas for large datasets.",
        "Developed real-time features using WebSockets and event-driven architecture",
        "Implemented secure user authentication and authorization using OAuth and JWT",
        "Collaborated with cross-functional teams to deliver complex product features",
        "Built reusable, modular components following design system guidelines",
        "Enhanced UX by optimizing API response handling and error management",
      ]
    }
  ]
  return (
    <>


      <section className="ftco-section ftco-no-pb" id="resume-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-10 heading-section text-center ftco-animate">
              <h1 className="big big-2">Experience</h1>
              <h2 className="mb-4">Experience</h2>
              <p>
                A small river named Duden flows by their place and supplies it with
                the necessary regelialia. It is a paradisematic country,
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">

              {/* EXPERIENCE DETAILS ROW -1 */}
              {experienceDetails_1.map((details, index) => {
                return (
                  <ExperienceDetails details={details} key={index}/>
                )
              })}
            </div>

            <div className="col-md-6">
              {/* EXPERIENCE DETAILS ROW -2 */}
              {experienceDetails_2.map((details, index) => {
                return (
                  <ExperienceDetails details={details} key={index}/>
                )
              })}
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center ftco-animate">
              <p>
                <a href="#" className="btn btn-primary py-4 px-5">
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


interface EducationSectionDetails {
  year: string,
  degree: string,
  institution: string,
  brief: string,
}

interface ExperienceDetails {
  year: string
  position: string
  company: string
  skills: string[]
  responsibilities: string[]
}

const EducationDetailTemplate = ({details}:{details:EducationSectionDetails}) =>  {

  return (
    <div className="resume-wrap ftco-animate">
      <span className="date">{details.year}</span>
      <h2>{details.degree}</h2>
      <span className="position">{details.institution}</span>
      <p className="mt-4"> {details.brief} </p>
    </div>
  )
}

const ExperienceDetails = ({details}:{details:ExperienceDetails})=> {


  return (
    <div className="resume-wrap ftco-animate">
      <span className="date">{details.year}</span>
      <h2>{details.position}</h2>
      <div className="position">at <Link className={"hover:bg-white"} href={"https://wenexus.io/"} target={"_blank"}>{details.company} </Link></div>

      <br/><br/>

      {details.skills.map((skill, index) => {
        return(
          <span style={{letterSpacing:"0.8px"}} className={`position inline-block m-1 bg-neutral-700 p-2 leading-3 rounded`} key={index}>{skill} </span>
        )
      })}

      <br/>
      <br/>

      {details.responsibilities.map((responsibilities, index) => {
        return <p key={index}>➤ {responsibilities}</p>
      })}


    </div>
  )
}

