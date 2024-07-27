import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('/Images/Hero.png')] bg-cover bg-no-repeat w-full text-white flex items-center justify-center">
      <div className="container mx-auto w-full hidden md:flex items-center min-h-screen">
        <div className="w-[44%] ml-14 space-y-6 lg:pt-24">
          <div>
            <h1 className="md:text-6xl font-semibold">
              <span className="text-blue-600">Interstellar Bot</span>, Your
              Crypto Companion on Telegram
            </h1>
          </div>
          <div>
            <p>
              At Interstellar Bot, we transform your crypto experience with
              advanced bots delivering real-time insights, trend analyses, and
              trading capabilities, all within Telegram.
            </p>
          </div>
          <div className="flex items-center space-x-8">
          <div>
              <button
                type="button"
                className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white focus-visible:outline"
              >
                Learn More
              </button>
            </div>
            <div className="flex gap-x-4">
              <Link href="#">
                <div className="border border-green-50 rounded-full p-2">
                  <Image
                    src="/Images/Telegram.svg"
                    alt="Telegram"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>

              <Link href="#">
                <div className="border border-green-50 rounded-full p-2">
                  <Image
                    src="/Images/twitter.svg"
                    alt="Telegram"
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="bg-[url('/Images/mb-Hero.png')] bg-cover bg-center h-screen text-white md:hidden block pt-24">
        <div className="px-8 space-y-6 pt-5">
          <div>
            <h1 className="text-4xl font-bold">
              <span className="text-blue-600">Interstellar Bot</span>, Your
              Crypto Companion on Telegram
            </h1>
          </div>
          <div>
            <p>
              At Interstellar Bot, we transform your crypto experience with
              advanced bots delivering real-time insights, trend analyses, and
              trading capabilities, all within Telegram.
            </p>
          </div>
          <div className="flex justify-between items-center w-[85%]">
            <div>
              <button
                type="button"
                className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white focus-visible:outline"
              >
                Learn More
              </button>
            </div>
            <div className="flex gap-x-4">
              <div className="border border-green-50 rounded-full p-2">
                <Image
                  src="/Images/Telegram.svg"
                  alt="Telegram"
                  width={30}
                  height={30}
                />
              </div>
              <div className="border border-green-50 rounded-full p-2">
                <Image
                  src="/Images/twitter.svg"
                  alt="Telegram"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
