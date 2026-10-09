import bannerImg from "../assets/banner-main.png";
import bannerBg from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="container mx-auto bg-center bg-cover bg-no-repeat bg-black text-center text-white py-16 space-y-3 md:space-y-4 lg:space-y-6 rounded-xl md:rounded-2xl lg:rounded-3xl mt-6"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <img className="mx-auto max-w-36 md:max-w-44 lg:max-w-55.5" src={bannerImg} alt="" />
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h2>
      <p>Beyond Boundaries Beyond Limits</p>
      <button className="border-4 bg-[#E7FE29] ring-1 ring-[#E7FE29] text-black font-bold rounded-md md:rounded-xl px-3 py-2.5">Claim Free Credit</button>
    </div>
  );
};

export default Banner;
