import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

export const FeaturesSection = () => {
  return (
    <section className="bg-[#120e11] w-screen text-white py-12 px-5">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          Products & Features
        </h1>

        {/* Card 1 */}
        <div className="relative">
          <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#348AF2] opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-[-100px] md:right-[-20px] right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#34F2AC] to-[#1C5295] opacity-20 blur-[100px]"></div>
          <div className="md:px-10 md:flex md:items-stretch md:w-[90%] bg-[rgba(87,92,105,0.1)] rounded-2xl md:mx-auto my-16 md:gap-x-10 relative z-10">
            <div className="md:w-[50%] px-5 md:px-0 md:py-20 py-10 space-y-6 flex flex-col justify-center">
              <h2 className="md:text-3xl text-2xl font-bold">
                Buy <span className="text-blue-500">Bot</span>
              </h2>
              <p className="text-sm md:text-base opacity-70">
                The Buy Bot alerts you whenever there are token purchases within
                a community. This feature helps you stay updated with the latest
                buying activities, providing insights into which tokens are
                gaining traction. It is an essential tool for understanding
                market movements and making informed decisions.
              </p>
              <div>
              <button
                type="button"
                className="rounded-md flex items-center gap-x-3 bg-blue-500 px-5 py-3 text-sm font-semibold text-white tracking-widest"
              >
                Try BuyBot <IoArrowForward className="text-xl" />
              </button>
            </div>
            </div>
            <div className="md:w-[50%]  flex items-center justify-end">
              <Image
                height={400}
                width={400}
                src="/Images/card-1-img.png"
                alt="Buy Bot"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <div className="absolute md:top-[-80px] top-[150px] md:left-[400px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#34F2AC] to-[#1C5295] opacity-20 blur-[100px]"></div>
          <div className="md:px-10 md:flex md:items-stretch md:w-[90%] bg-[rgba(87,92,105,0.1)] rounded-2xl md:mx-auto my-16 md:gap-x-16">
            <div className="md:w-[40%] pt-5  hidden md:block">
              <Image
                height={400}
                width={400}
                src="/Images/card-2-img.png"
                alt="Trending Channel"
              />
            </div>
            <div className="md:w-[60%] px-5 md:px-0 md:pr-14 md:py-20 py-10 space-y-6 flex flex-col justify-center">
              <h2 className="md:text-3xl text-2xl font-bold">
                <span className="text-blue-500">Trending</span> Channel
              </h2>
              <p className="text-sm md:text-base">
                Trending Channel showcases all the new and trending tokens on
                the TON chain. This feature keeps you in the loop with the
                latest trends and hot tokens, ensuring you do not miss out on
                emerging opportunities.
              </p>
              <div>
              <button
                type="button"
                className="rounded-md flex items-center gap-x-3 bg-blue-500 px-5 py-3 text-sm font-semibold text-white tracking-widest"
              >
                See Trading Pools <IoArrowForward className="text-xl" />
              </button>
            </div>
            </div>
            <div className="md:w-[40%] pt-5 md:hidden">
              <Image
                height={600}
                width={600}
                src="/Images/card-2-img.png"
                alt="Trending Channel"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <div className="absolute md:top-[-80px] top-0 md:right-[-20px] right-0 w-[300px] h-[300px] rounded-full bg-[#348AF2] opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#34F2AC] to-[#1C5295] opacity-20 blur-[100px]"></div>
          <div className="md:pl-10 md:flex md:items-stretch md:w-[90%] bg-[rgba(87,92,105,0.1)] rounded-2xl md:mx-auto my-16 md:gap-x-10">
            <div className="md:w-[50%] px-5 md:px-0 md:py-20 py-10 space-y-6 flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold">
                Mega <span className="text-blue-500">Bot</span>
              </h1>
              <p className="text-sm md:text-base">
                Mega Bot is a powerful tool designed for advanced trading on the
                TON chain. It allows you to create a TON wallet and execute buy
                and sell orders with precision. Known as a{" "}
                <span className="text-[#348AF2]">sniper bot</span>, it can
                swiftly act on trading opportunities, helping you take advantage
                of price fluctuations and market trends.
              </p>
              <div>
              <button
                type="button"
                className="rounded-md flex items-center gap-x-3 bg-blue-500 px-5 py-3 text-sm font-semibold text-white tracking-widest"
              >
                Start Trading <IoArrowForward className="text-xl" />
              </button>
            </div>
            </div>
            <div className="md:w-[50%] h-[350px] md:h-auto">
              <Image
                height={800}
                width={600}
                src="/Images/card-3-img.png"
                alt="Mega Bot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;