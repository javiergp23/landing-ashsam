import NavBar from "./NavBar"
import "./HeroSection.css"

export default function HeroSection(){
    return(
        <div className="hero-section">
            <NavBar/>
            <div className="hero-section-content">
                <div>
                    <h1 className="hero-section_title">Codificamos el <br /> futuro de tu éxito.</h1>
                    <p className="hero-section_subtitle">La tecnologíia que necesitas, <br /> a alcace de tu mano.</p>
                    <button className="button-hero-section">Ver servicios</button>
                </div>
                <div className="hero-section_img">
                    <img className="hero-section_img-1" src="/src/assets/img-hero-section.png" alt="img-hero-section" />
                </div>
            </div>
            <div className="hero-content-two">
                <h2 className="tiitle-two">Nuestro compromiso</h2>
                <p className="subtiitle-two">Es con vos</p> 
            </div>
        </div>
    )
}