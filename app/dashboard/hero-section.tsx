import {JSX} from "react";

interface HeroSectionSliderData {
  heading: string | JSX.Element;
  subHeading?: string;
  backgroundImage: string;
}

export const HeroSection =() => {

  const heroSectionSliderData:HeroSectionSliderData[] = [
    {
      heading: <>I'm <span>Mahinul Mostafa Abid</span></>,
      subHeading: "A Back-End Developer",
      backgroundImage:"url(images/cat_1.jpg)"
    },
    {
      heading: <>I'm a <span>Back-End Developer</span> based in Bangladesh</>,
      backgroundImage:"url(images/cat2.jpg)"
    }
  ]

  const config = {
    showHireMeButton: false
  }

  return (
    <section id="home-section" className="hero">
      <div className="home-slider  owl-carousel">

        {
          heroSectionSliderData.map((item, index:number) => {
            return (
              <div className="slider-item " key={index}>
                <div className="overlay" />

                <div className="container">
                  <div
                    className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <div
                      className="one-third js-fullheight order-md-last img"
                      style={{ backgroundImage: item.backgroundImage }}
                    >
                      <div className="overlay" />
                    </div>
                    <div
                      className="one-forth d-flex  align-items-center ftco-animate"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3"> {item.heading} </h1>

                        {item.subHeading ?
                          <h2 className="mb-4">{item.subHeading}</h2>
                          : null
                        }

                        <HeroButton showButton={config.showHireMeButton} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


const HeroButton = ({showButton}:{showButton:boolean}) => {
  return(
    <>
      {/* EASILY HIDE HIRE ME BUTTON */}
      {
        showButton ?
        <p>
          <a href="#" className="btn btn-primary py-3 px-4">
            Hire me
          </a>{" "}
          <a
            href="#"
            className="btn btn-white btn-outline-white py-3 px-4"
          >
            My works
          </a>
        </p>

        : null
      }
    </>
  )
}
