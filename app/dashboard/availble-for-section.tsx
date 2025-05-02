import Link from "next/link"

export const AvailableForSection = () => {

  return (
    <>
      <section
        className="ftco-section ftco-hireme img margin-top"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center">
              <h2>
                I'm <span>Available</span> for a coffee 😊
              </h2>
              <p className="text-white">
                Let’s chat over coffee. Open to projects, ideas, or just good conversation. Feel free to reach out anytime.
              </p>
              <p className="mb-0">
                <Link href="mailto:himahinul@gmail.com" className="btn btn-primary py-3 px-5 cursor-pointer">
                  himahinulabid@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
