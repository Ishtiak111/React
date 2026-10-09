import { useState } from "react";
import type { countryType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: countryType;
  handleVisitedCountry: (country: countryType) => void;
  handleVisitedFlags: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}: CountryProps) {
  const [visited, setVisited] = useState(false);
  const [visitedFlag, setVisitedFlag] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  const handleFlags = () => {
    setVisitedFlag(!visitedFlag);
  };

  return (
    <div className={`country ${visited ? "bg" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt="" />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as visited"}
      </button>
      <button onClick={() => {
        handleVisitedFlags(country.flags.flags.png)
        handleFlags()
      }}>{visitedFlag?"Remove Flag": "Add Flag"}</button>
    </div>
  );
}
