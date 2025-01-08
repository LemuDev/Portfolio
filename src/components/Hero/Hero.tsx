import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home" style={{ overflowX: "hidden" }}>
      <div className="hero__container">
        <div className="hero__container-content blur-bg">
          <h1 className="hero__title">
            Lemuel Cruz <span>FullStack Developer</span>
          </h1>

          <div className="contact__grid">
            <a
              href="https://github.com/lemudev"
              target="_blank"
              className="card-contact"
            >
              <i className="fa-brands fa-github"></i>
              <h4>Github</h4>
            </a>

            <a
              href="https://www.linkedin.com/in/lemuel-cruz/"
              target="_blank"
              className="card-contact"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <h4>Linkedin</h4>
            </a>
          </div>

          <div style={{ padding: '2rem 0' }}>
            <a href="/cv/lemuel-cruz-cv.pdf" download={true} className="dowload-cv-btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
