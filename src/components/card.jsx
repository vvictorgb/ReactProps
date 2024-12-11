import "../style/card.css"

export default function Card({ personas }) {
 
    return (
        <div className="card">
            <div className="imagen1">
                <img src={require(`../img/${personas.foto}.png`)} alt="imagen1" />
            </div>
            <div className="descripcion">
                <p>{personas.nombre} en {personas.pais}</p>
                <p>{personas.cargo} de {personas.empresa}</p>
                <p>{personas.opinion}</p>
            </div>
        </div>
    )
}
