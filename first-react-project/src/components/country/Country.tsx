import { useState } from "react";
import type { CountryType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country:CountryType)=>void;
  handleVisitedFlags: (flags: string)=>void;
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlags }: CountryProps) {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };



  return (
    <div className={`country ${visited ? "card-bg" : ""}`}>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital.capital[0]}</p>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country.flags.flags.png)}>Add flag as visited</button>
    </div>
  );
}
