import SportCard from "./sportCard";
import type { SportType } from "./types";

const sports: SportType[] = [
    {name: 'Foodball', players: 11},
    {name: 'Kabadi', players: 9},
    {name: 'Chess', players: 2},
]

export default function Sports(){
    return(
        <div>
            {
                sports.map(sport => <SportCard sport={sport}></SportCard>)
            }
        </div>
    )
}