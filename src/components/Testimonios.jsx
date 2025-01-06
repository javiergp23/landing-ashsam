import "./testimonios.css"
import CardTestimonios from "./CardTestimonios"

export default function Testimonios(){
    return(
        <>
            <div className="testimonios-container" id="testimonios">
                <div>
                    <p className="test-title">TESTIMONIOS</p>
                    <h1 className="test-title-two">Nuestros clientes</h1>
                    <h2 className="test-title-three">Te compartimos sus experiencias</h2>
                </div>
                <div>
                    <CardTestimonios/>
                </div>
            </div>
        </>
    )
}