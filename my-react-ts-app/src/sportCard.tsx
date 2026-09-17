import type { SportType } from "./types";

export default function SportCard({ sport }: { sport: SportType }) {
  return (
    <div className="sport">
      <h5>Name: {sport.name}</h5>
      <p>Players: {sport.players}</p>
    </div>
  );
}
