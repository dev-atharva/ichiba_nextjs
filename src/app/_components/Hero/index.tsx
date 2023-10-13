import Image from "next/image";
import hero_image from "./../../../../public/hero_image.webp";

const Hero = () => {
  return (
    <div className="hero min-h-[70vh] p-2 shadow-md  ">
      <div className="hero-content flex-col lg:flex-row-reverse sm:gap-32">
        <Image
          src={hero_image}
          alt="This is the main hero image"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-7xl font-bold text-red-800">Rakuten New Life</h1>
          <p className="py-6 text-xl">
            Revamp Your 20s with Rakuten New Life: Shopping, Style, Success
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
