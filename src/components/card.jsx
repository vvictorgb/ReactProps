import "../style/card.css"
import { useState } from 'react';

export default function Card() {
    const [conter, setState] = useState(0)

    function sumar1(){
        setState(conter => conter + 1)
    }
    function restar1(){
        setState(conter => conter -1)
    }
    function sumar10(){
        setState(conter => conter + 10)
    }
    function restar10(){
        setState(conter => conter - 10)
    }
    function reiniciar(){
        setState(conter => conter = 0)
    }

    return (


        <div className="contenedor"> 
         <div><p>{conter}</p></div>
         <div className="flex">
            <div onClick={sumar1}>+1</div>
            <div onClick={restar1}>-1</div>
         </div>
         <div className="flex">
            <div onClick={sumar10}>+10</div>
            <div onClick={restar10}>-10</div>
         </div>
         <div onClick={reiniciar}>Reiniciar</div>
        </div>
    )
}
