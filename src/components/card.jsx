import "../style/card.css"

export default function Card({ pokemon }) {
  let type = pokemon.types.map(type => {
    return type + " "
  })
  let conseguirClase = pokemon.types[0]
  let Evolucion = ""
  if(pokemon.evolution.next != null){
    Evolucion = "Evolucion: " + pokemon.evolution.next + " at level " + pokemon.evolution.level
  }
  
    return (
        <div className={`card ${conseguirClase}`}> 
            <h3 className="tamaño">{pokemon.name}</h3>
            <div className="imagen1">
                <img src={pokemon.image} alt="" />
            </div>
            <div className="flex alinear">
                <p>Tipos: </p>
                <p>{type}</p>
            </div>
            <div className="flex alinear">
                <p>HP:</p>
                <p>{pokemon.stats.hp}</p>
            </div>
            <div className="flex alinear">
                <p>Ataque:</p>
                <p>{pokemon.stats.attack}</p>
            </div>
            <div className="flex alinear">
                <p>Defensa:</p>
                <p>{pokemon.stats.defense}</p>
            </div>
            <div className="flex alinear">
                <p>Ataque especial:</p>
                <p>{pokemon.stats.specialAttack}</p>
            </div>
            <div className="flex alinear">
                <p>Defensa especial:</p>
                <p>{pokemon.stats.specialDefense}</p>
            </div>
            <div className="flex alinear">
                <p>Velocidad:</p>
                <p>{pokemon.stats.speed}</p>
            </div>
            <div>{Evolucion}</div>
            <div className="flex alinear">
                <p>Descripcion:</p>
                <p>{pokemon.description}</p>
            </div>

        </div>
    )
}
