import "./footer.css"

export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="container-item-footer logo-div">
                    <img src="/src/assets/logo1.png" alt="Logo-footer" />
                    <nav>
                        <a href="#"><img className="logo-social" src="/src/assets/SocialIcon.png" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/bxl-linkedin.svg" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/bxl-facebook.svg" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/bxl-youtube.svg" alt="" /></a>
                    </nav>
                </div>
                <div className="container-item-footer">
                    <p className="title-footer">Soporte</p>
                    <a className="text-footer-links" href="">Servicios</a>
                    <a className="text-footer-links" href="">Sobre nosotros</a>
                    <a className="text-footer-links" href="">Testimonios</a>
                    <a className="text-footer-links" href="">Trabaja con nosotros</a>
                </div>
                <div className="container-item-footer">
                    <p className="title-footer">Contacto</p>
                    <p className="text-footer-links">011 34893455</p>
                    <p className="text-footer-links">ejemplo@gmail.com</p>
                </div>
            </div>
        </>
    )
}