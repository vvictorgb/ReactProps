import Cabecera from "./components/cabecera";
import Card from "./components/card";
import info from './info.json'

export default function App(){
    return(
        <div>
            <Cabecera/>
            <div className="container">
            {info.map( (elemento, index) => <Card key={index} pokemon={elemento}/>)}
            </div>
        </div>
    
)   
}