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

  const handleVisitedCountries = (country: CountryType): void => {
    const exists = visitedCountries.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    if (exists) {
      const remainingCountries = visitedCountries.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountries(remainingCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  const handleVisitedFlags = (flag: string): void => {
    if (visitedFlags.includes(flag)) {
      const remainingFlags = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Visited:{visitedCountries.length}</h3>
      <h3>Visited Flags: {visitedFlags.length}</h3>

      <div>
        {
          visitedFlags.map(flag => <img style={{width:'100px', marginRight:"10px"}} src={flag}></img>)
        }
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
