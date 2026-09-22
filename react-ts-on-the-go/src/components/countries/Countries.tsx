import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../country/Country";
import "./countries.css";

export interface CountriesProps {
  countryPromise: Promise<CountryType[]>;
}

export default function Countries({ countryPromise }: CountriesProps) {
  const countries = use(countryPromise);

  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
  const handleVisitedCountry = (country: CountryType): void => {
    const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3)
    if(exists){
      const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
      setVisitedCountries(remainingCountries);
    }else{
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    }
  };

  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);
  const handleVisitedFlag = (flag: string): void => {
    if (visitedFlags.includes(flag)) {
      const remainingFlag = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlag);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Country: {countries.length}</h2>
      <h2>Visited Countries: {visitedCountries.length}</h2>
        <ul>
          {
            visitedCountries.map(country => <li>{country.name.common}</li>)
          }
        </ul>
      <h2>Visited Flag: {visitedFlags.length}</h2>
      <div className="visited-flag">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
