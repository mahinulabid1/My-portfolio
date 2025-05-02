

export const EducationSection = () => {

  const educationDetails:EducationSectionDetails[] = [
    {
      year:"2017-2024",
      institution: "National University",
      degree: "Bachelors of Business Administration",
      brief: "During my university, I spent most of my time learning programming language and dived deep into the web application development. Even though I have no interest in BBA, I still completed it and moving forward with my passion. Currently I'm working as a back-end developer in 'Wenexus'",
    },

  ]

  const educationDetails_2:EducationSectionDetails[] = [
    {
      year:"2015-2017",
      institution: "Hajera Taju University College",
      degree: "Higher School Certificate",
      brief: "After graduating from school, I was admitted to HTUC in commerce major. There I've developed a good bonding with technology and computer. From there I began to dream about being a game developer and started programming little by little.",
    },
    {
      year:"2014-2015",
      institution: "Chakaria Korak Biddya Pith",
      degree: "Secondary School Certificate",
      brief: "I completed my secondary school certificate from science major. Nothing fancy or memorable thing to write about it.",
    }
  ]

  return (
    <>
      <section className="ftco-section ftco-no-pb" id="resume-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-10 heading-section text-center ftco-animate">
              <h1 className="big big-2">Education</h1>
              <h2 className="mb-4">Education</h2>
              <p>
                “The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.” — Steve Jobs
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">

              {educationDetails_2.map((details, index) => {
                return (
                  <div key={index}>
                    <EducationDetailTemplate details={details} key-={index}/>
                  </div>
                )
              })}
            </div>

            <div className="col-md-6">
              {educationDetails.map((details, index) => {
                return (
                  <div key={index}>
                    <EducationDetailTemplate details={details} key-={index}/>
                  </div>
                )
              })}
            </div>
          </div>



          {/*DOWNLOAD CV SECTION*/}
          {/*<div className="row justify-content-center mt-5">*/}
          {/*  <div className="col-md-6 text-center ftco-animate">*/}
          {/*    <p>*/}
          {/*      <a href="#" className="btn btn-primary py-4 px-5">*/}
          {/*        Download CV*/}
          {/*      </a>*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}


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
