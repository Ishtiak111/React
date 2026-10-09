import { Suspense } from "react";
import "./App.css";
import type { countryType } from "./type";
import Countries from "./components/countries/Countries";

const countriesPromise = async (): Promise<countryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2>Country on the go</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;
