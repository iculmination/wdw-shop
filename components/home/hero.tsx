import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/* grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            Mega sale <span className="text-rose-600">special</span> offer up to{" "}
            <span className="text-orange-500">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            quis consequuntur corporis praesentium id libero. Officia dolor
            illum nihil cupiditate modi consequuntur nobis, consequatur
            similique nemo facere. Possimus, vitae voluptates!
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-600">
              Shop Now
            </Button>
            <Button size="lg" className="">
              Explore More
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/hero.svg"
            alt="hero"
            width={600}
            height={600}
            className="lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
