import Logo from "../assets/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";

const Nav = ({coin}:{coin:number}) => {
  
  return (
    <nav className="bg-red-100">
      <div className="container mx-auto flex justify-between items-center">
        <img className="my-2" src={Logo} alt="" />
        <ul className="flex gap-4 items-center font-semibold">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
        </ul>
        <h2 className="flex items-center gap-0.5 font-bold text-3xl text-black">
          {coin} <AiFillDollarCircle />
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
