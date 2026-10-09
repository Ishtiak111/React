import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import type { Iplayer } from "./types/type";


const playersFetch = async():Promise<Iplayer[]> =>{
  const res = await fetch("/data.json");
  const date = res.json();
  return date;
}

function App() {
  const [playersPromise] = useState(()=>playersFetch())
  const [coin, setCoin] = useState(5000);
  return (
    <>
    <Nav coin={coin}></Nav>
    <Banner></Banner>
    <Suspense fallback={<p>Loading...</p>}>
      <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
    </Suspense>
    </>
  )
}

export default App
