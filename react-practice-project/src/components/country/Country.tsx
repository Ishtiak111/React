import { useState } from "react";
import type { CountryType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountries: (country: CountryType)=>void;
  handleVisitedFlags: (flag: string)=>void;
}

export default function Country({ country, handleVisitedCountries, handleVisitedFlags }: CountryProps) {
  const [visited, setvisited] = useState(false);
  const handleVisited = () => {
    setvisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited? "bg":""}`}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.flags.png} alt="" />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country.flags.flags.png)}>Add flag</button>
    </div>
  );
}
