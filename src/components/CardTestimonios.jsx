import  "./testimonios.css"

export default function CardTestimonios({img, testimonio, name}){
    return(
        <>
            <div className="card-container-test">
                <img src={img} alt="" />
                <p>{testimonio}</p>
                <p>{name}</p>
            </div>
        </>
    )
}