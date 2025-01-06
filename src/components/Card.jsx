import "./cards.css"

export default function Card({img, title, paragraph}){
    return(
        <>
            <div className="card">
                <img className="card_img" src={img} alt="img-card" />
                <h1 className="card_title">
                    {title}
                </h1>
                <p className="card_paragraph">
                   {paragraph}
                </p>
            </div>
        </>
    )
}