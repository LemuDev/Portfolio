import "./About.css";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about__container ">
        <div className="decorator" style={{ bottom: "1rem", right: "1rem", filter: 'blur(100px)'  }}></div>
        <div
          className="decorator"
          style={{ top: "1rem", left: "1rem", filter: 'blur(100px)'}}
        ></div>

        <div className="about__content blur-bg">
          <div className="about__image">
            <img src="./img/about.png" alt="" />
          </div>

          <div>
            <h1 className="about__title">About Me</h1>
            <p>
              I am a Full Stack developer with proven experience in developing
              and maintaining web applications. I have a solid knowledge of
              various technologies and programming languages, which allows me to
              create efficient and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
