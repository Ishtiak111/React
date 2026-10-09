import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
import PlayerCard from "./PlayerCard";
interface PlayerProps {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6">
      {players.map((player, ind) => {
        return (
          <PlayerCard
            player={player}
            key={ind}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
