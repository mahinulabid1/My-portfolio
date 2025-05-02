

export const Comp_Route = () => {

  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Clark</a>
          <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
                  data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
              <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
              <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
              <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
              <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
              <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
              <li className="nav-item"><a href="#blog-section" className="nav-link"><span>My Blog</span></a></li>
              <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: "url(/images/bg_1.png)" }}>
                  <div className="overlay"></div>
                </div>
                <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax="properties: { translateY: '70%' }">
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">I'm <span>Clark Thompson</span></h1>
                    <h2 className="mb-4">A Freelance Web Designer</h2>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">Hire me</a>
                      <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more slides as needed */}
        </div>
      </section>


      <section className="ftco-section" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Blog</h1>
              <h2 className="mb-4">Our Blog</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_1.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">Why Lead Generation is Key for Business Growth</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_2.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">Why Lead Generation is Key for Business Growth</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_3.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">Why Lead Generation is Key for Business Growth</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="100">0</strong>
                  <span>Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="1200">0</strong>
                  <span>Complete Projects</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="1200">0</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="500">0</strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-hireme img margin-top"
        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center">
              <h2>I'm <span>Available</span> for freelancing</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p className="mb-0">
                <a href="#" className="btn btn-primary py-3 px-5">Hire me</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>

          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-signs"></span>
                </div>
                <h3 className="mb-4">Address</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2"></span>
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-globe"></span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p><a href="#">yoursite.com</a></p>
              </div>
            </div>
          </div>

          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea cols={30} rows={7} className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div className="img" style={{ backgroundImage: "url('images/about.jpg')" }}></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Business Strategy</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Graphic Design</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy; {new Date().getFullYear()} All rights reserved | This template is made with
                <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" />
        </svg>
      </div>


    </>
  )
}
