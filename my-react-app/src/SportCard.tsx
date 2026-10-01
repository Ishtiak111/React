interface spType{
    name: string;
    players: number;
}

export default function SportCard({sport}:{sport:spType}){
    return (
        <div className="user2">
            <h5>Name: {sport.name}</h5>
            <p>Players: {sport.players}</p>
        </div>
    )
}