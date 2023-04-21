import Header from "./Header";

export default function Home() {
  return (
    <div className="home-content">
      <Header />
      <div className="home-body">
        <div className="row-centered" style={{ margin: 0 }}>
          <div className="col-centered" style={{ flexGrow: 1, height: "100%" }}>
            <h3 style={{ margin: 0 }}>Hey!</h3>

            <h1 style={{ marginBottom: 0 }}>I'm Sara Strenger.</h1>
            <h2 style={{ marginTop: 0 }}>
              I'm software engineer based in Philadelphia, PA.
            </h2>

            <div className="home-content__buttons">
              <a href="#works" className="smoothscroll btn btn--stroke">
                Projects
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                About Me
              </a>
            </div>

            <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
          <div
            className="col-centered"
            style={{
              alignItems: "center",
              maxWidth: 400,
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "100%" }}
              src={require("./images/sara.jpeg")}
              alt="logo"
            />
          </div>

          <div className="col-centered">
            <ul className="home-social">
              <li>
                <a href="https://github.com/saraxstrenger#">
                  <i className="im im-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sara-strenger">
                  <i className="im im-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
