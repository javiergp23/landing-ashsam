import "./services.css"
import Card from "./Card"

export default function Services(){
    return(
        <>
            <div className="services-container" id="services">
                <h1>
                    Estamos para vos
                </h1>
                <p>
                     Estos son nuestros servicios
                </p>
            </div>
            <div className="services-cards">
                <Card 
                    title="Gestión de proyectos" 
                    img="/src/assets/gestion.png" 
                    paragraph="Proyectos de principio a fin, con total transparencia y resultados garantizados."
                />
                <Card
                    title="Servicios de Staffing" 
                    img="/src/assets/candidato.png" 
                    paragraph="El éxito de tu equipo asegurado."
                /> 
                <Card
                    title="Desarrollos a la Medida " 
                    img="/src/assets/codificacion.png" 
                    paragraph="Transforma tu visión en una solución tecnológica."
                />
            </div>
        </>
    )
}