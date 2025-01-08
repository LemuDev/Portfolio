import './Navbar.css'

export function Navbar() {
  return (
    <nav className="nav">
    <div className="nav__container">
      <div className="nav__container__logo_menu">
        <span className="logo">Lemuel Cruz</span>

        <button className="hamburguer-btn" id="hamburguer-btn">
          <span className="hamburguer-tile"></span>
          <span className="hamburguer-tile"></span>
        </button>
      </div>

      <div className="nav__container__links" id="nav__container__links">
        <a href="#home" className="nav__links">Home</a>
        <a href="#about" className="nav__links">About Me</a>
        <a href="#skills" className="nav__links">Skills</a>
        <a href="#projects" className="nav__links">Projects</a>
        <a href="#contact" className="nav__links">Contact</a>
      </div>
      

    </div>
  </nav>
  )
}

