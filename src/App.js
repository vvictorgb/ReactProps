import Cabecera from "./components/cabecera";
import Card from "./components/card";
import info from './info.json'

export default function App(){
    return(
        <div>
            <Cabecera/>
            {info.map( (elemento, index) => <Card key={index} personas={elemento}/>)}
        </div>
    
)   
}