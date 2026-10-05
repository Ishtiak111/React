import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../country/Country";
import "./countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const handleVisitedCountry = (country: CountryType): void => {
    const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
    if (exists) {
      const remainingCountries = visitedCountries.filter((c) => c.ccn3.ccn3 !== country.ccn3.ccn3);
      setVisitedCountries(remainingCountries);
    }else{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
  };

  const handleVisitedFlags = (flags: string): void => {
    if (visitedFlags.includes(flags)) {
      const remainingFlags = visitedFlags.filter((f) => f !== flags);
      setVisitedFlags(remainingFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flags];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Country: {countries.length}</h2>
      <h3>Visited: {visitedCountries.length}</h3>
      <h3>Visited Flags: {visitedFlags.length}</h3>
      <div>
        <ul>
            {visitedCountries.map(country=> <li key={country.ccn3.ccn3}>{country.name.common}</li>)}
        </ul>
      </div>
      <div>
        {visitedFlags.map((flag, index) => (
          <img
            key={index}
            style={{ maxWidth: "100px", marginRight: "5px" }}
            src={flag}
          ></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
