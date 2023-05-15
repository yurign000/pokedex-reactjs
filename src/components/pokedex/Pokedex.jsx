import LeftSide from "./left-side/LeftSide"
import RightSide from "./right-side/RIghtSide"
import Middle from "./middle/Middle"
import "./pokedex.css"

export default function Pokedex(props){
    return(
        <div className="pokedex">
            <LeftSide/>
            <Middle/>
            <RightSide/>
        </div>
    )
}