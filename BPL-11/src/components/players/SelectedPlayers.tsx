import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
// import { TbTrash } from "react-icons/tb";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface SelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersProps) => {
    if(selectedPlayers.length === 0){
        return (
            <h2 className="font-bold text-3xl mb-80 my-10 text-center text-red-500">No selected players</h2>
        )
    }
  return (
    <div className="mt-4 grid grid-cols-1 gap-5 mb-20">
      {selectedPlayers.map((player: Iplayer, ind: number) => {
        return (
          <SelectedPlayerCard
            key={ind}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayerCard>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
