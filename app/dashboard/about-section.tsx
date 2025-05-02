

export const AboutSection = () => {

  return (
    <>
      <section
        className="ftco-about img ftco-section ftco-no-pb"
        id="about-section"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: "url(images/about.jpg)" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>
                    I’m probably off somewhere right now — learning something new, sketching ideas, planning projects,
                    or deep in development mode. I work as a Back-End Developer with the Software Engineering team at Wenexus.
                    Feel free to explore my work, reach out to brainstorm ideas, collaborate on something
                    exciting, or just grab a coffee and chat!
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Name:</span> <span>Mahinul Mostafa Abid</span>
                    </li>
                    <li className="d-flex">
                      <span>Date of birth:</span> <span>July 24, 1999</span>
                    </li>
                    <li className="d-flex">
                      <span>Address:</span> <span>Rampura, Dhaka, Bangladesh</span>
                    </li>
                    <li className="d-flex">
                      <span>Zip code:</span> <span>1219</span>
                    </li>
                    <li className="d-flex">
                      <span>Email:</span> <span>himahinulabid@gmail.com</span>
                    </li>
                    <li className="d-flex">
                      <span>Phone: </span> <span>+88-01930359958</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text">
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-3">
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
