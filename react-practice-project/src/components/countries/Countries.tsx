import { use, useState } from "react";
import type { countryType } from "../../type";
import Country from "../country/Country";
import "./countries.css";

export interface CountriesProps {
  countriesPromise: Promise<countryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState<countryType[]>([]);
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const handleVisitedCountry = (country: countryType): void => {
    const exists = visitedCountries.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    if (exists) {
      setVisitedCountries(
        visitedCountries.filter((c) => c.ccn3.ccn3 !== country.ccn3.ccn3),
      );
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  const handleVisitedFlags = (flag: string): void => {
    if (visitedFlags.includes(flag)) {
      setVisitedFlags(visitedFlags.filter((f) => f !== flag));
    } else setVisitedFlags([...visitedFlags, flag]);
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <h3>Visited Flags: {visitedFlags.length}</h3>
      <div>
        {
            visitedFlags.map(f => <img style={{maxWidth: "80px", marginRight: "5px"}} src={f}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags ={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
