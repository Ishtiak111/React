import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
import { TbTrash } from "react-icons/tb";

interface SelectedCardProps {
  player: Iplayer;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedCardProps) => {
  const handleRemovePlayer = (player: Iplayer) => {
    setSelectedPlayers(
      selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
      ),
    );
    // const total = ;
    setCoin(coin + player.price);
  };

  return (
    <div className="flex justify-between items-center border-2 border-gray-400 rounded-2xl py-2 px-4">
      <div className="flex gap-3">
        <img className="w-20" src={player.playerImg} alt="" />
        <div>
          <h2 className="font-bold text-2xl">{player.playerName}</h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={() => handleRemovePlayer(player)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default SelectedPlayerCard;
