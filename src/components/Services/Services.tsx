import './Services.css'

export function Services() {
  return (
    <section className="services" id="services">
      <div className="decorator" style={{ bottom: "15rem", right: "-2rem", filter: 'blur(100px)'  }}></div>
      <div className="decorator" style={{ top: "10rem", left: "-2rem", filter: 'blur(100px)'}}></div>

      <div className="services__container blur-bg">

        <h2 className="services__title">My Services</h2>

        <div className="services__card">
          <div className="services__card_header">
            <img src="./img/backend.webp" alt="Backend Development"/>
          </div>
  
          <div className="services__card_body">
            <h4>Backend Development</h4>
          </div>
        </div>
      
        <div className="services__card">
          <div className="services__card_header">
            <img src="./img/front.webp" alt="Frontend Development"/>
          </div>
  
          <div className="services__card_body">
            <h4>Frontend Development</h4>
          </div>
        </div>

      </div>
    </section>
  )
}
