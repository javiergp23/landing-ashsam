export default function NavBar(){
    return(
        <>
            <div className="nav-bar">
                <img  className="img-logo" src="/src/assets/logo1.png" alt="Logo" />
                <a className="nav-bar_link" href="#services">Servicios</a>
                <a className="nav-bar_link" href="#about">Sobre Nosotros</a>
                <a className="nav-bar_link" href="#testimonios">Testimonios</a>
                <a className="nav-bar_link" href="#work">Trabaja con nosotros</a>
                <a className="nav-bar_link" href="#contact">Contacto</a>
                <select name="" id="" className="select-lang">
                    <option value="" disabled selected>Idioma</option>    
                    <option value="">Español</option>
                    <option value="">Ingles</option>    
                </select>
            </div>
        </>
    )
}