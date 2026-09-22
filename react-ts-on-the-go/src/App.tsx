import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./type";
import Countries from "./components/countries/Countries";

const countryPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countryPromise={countryPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;
