import { useState, type Dispatch, type SetStateAction } from "react";
import { FaUser, FaMapMarkerAlt, FaBaseballBall } from "react-icons/fa";
import type { Iplayer } from "../../types/type";
import { toast } from "react-toastify";

interface CardType {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: CardType) => {
  // console.log(coin, setCoin, "Fom card");
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    if (coin >= player.price) {
      setCoin(coin - player.price);
      toast.success(`${player.playerName} is purchesed successfully.`);
    } else {
      toast.error("Coin is not enough to purchase!");
      setIsSelected(false);
    }

    setSelectedPlayers([...selectedPlayers, player])
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-base-100/90 px-3 py-1.5 text-sm font-semibold shadow backdrop-blur-sm">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Body */}
      <div className="p-5">
        {/* Player Name */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaUser size={15} />
          </div>

          <h2 className="text-xl font-bold">{player.playerName}</h2>
        </div>

        {/* Origin */}
        <div className="mb-4 flex items-center gap-2 text-sm text-base-content/70">
          <FaMapMarkerAlt className="text-primary" />
          <span>{player.origin}</span>
        </div>

        <div className="divider my-3"></div>

        {/* Player Details */}
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-base-content/60">
            <FaBaseballBall className="text-primary" />
            Player Details
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Batting</p>
              <p className="mt-1 text-sm font-semibold">
                {player.battingStyle}
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Bowling</p>
              <p className="mt-1 text-sm font-semibold">
                {player.bowlingStyle}
              </p>
            </div>
          </div>
        </div>

        <div className="divider my-4"></div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-base-content/60">
              Player Price
            </p>

            <p className="mt-1 text-2xl font-extrabold text-primary">
              ${player.price}
            </p>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className="btn btn-primary rounded-xl px-5 shadow-sm transition-all hover:scale-105"
            // disabled={isSelected ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Select" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
