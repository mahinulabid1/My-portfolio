interface NavLinkItem {
  content: string
  link: string
  tagType?: "a" | "button" | "link"
}

export const Nav = () => {

  const navLinkItem: NavLinkItem[] = [
    {
      link: "#home-section",
      content: "Home",
      tagType: "a"
    },
    {
      link: "#",
      content: "About",
      tagType: "a"
    },
    {
      link: "#",
      content: "Resume",
      tagType: "a"
    },
    {
      link: "#",
      content: "Services",
      tagType: "a"
    },
    {
      link: "#",
      content: "Skills",
      tagType: "a"
    },
    {
      link: "#",
      content: "My Projects",
      tagType: "a"
    },
    {
      link: "#",
      content: "My Blog",
      tagType: "a"
    },
    {
      link: "#",
      content: "Contact",
      tagType: "a"
    },
  ]


  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Mahinul
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"/> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              {navLinkItem.map((item: NavLinkItem, key:number) => {
                return (
                  <li className="nav-item" key={key}>
                    <a href={item.link} className="nav-link">
                      <span>{item.content}</span>
                    </a>
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
