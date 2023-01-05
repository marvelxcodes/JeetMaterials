import type { NextPage } from "next";
import Subject from "./subject";
import Chemistry from "../assets/chemistry.png";
import Maths from "../assets/maths.png";
import Physics from "../assets/physics.png";
import Biology from "../assets/biology.png";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col py-10 items-center justify-center min-h-screen bg-gradient-to-br from-purple-400">
      <h3 className="text-[4vw] lg:text-2xl text-gray-600">Welcome to</h3>
      <h1 className="text-[10vw] lg:text-8xl font-bold text-center text-violet-600 ">JEET MATERIALS</h1>
      <p className="text-[2.5vw] lg:text-lg max-w-[80%] text-center uppercase tracking-widest font-semibold mb-20 text-white">
        All Competitive Materials at on place
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="flex md:m-0 mb-2">
          <Subject name="Maths" image={Maths} />
          <Subject name="Biology" image={Biology} />
        </div>
        <div className="flex md:m-0 mt-2">
          <Subject name="Physics" image={Physics} />
          <Subject name="Chemistry" image={Chemistry} />
        </div>
      </div>
    </div>
  );
};

export default Home;
