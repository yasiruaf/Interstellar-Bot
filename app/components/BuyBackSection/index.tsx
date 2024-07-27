import React from "react";

export const BuyBackSection = () => {
  return (
    <section className="bg-[#120e11] text-white w-screen py-12 md:px-5 px-3">
      <div className="bg-[#14141c] rounded-3xl md:w-[90%] container mx-auto h-[550px] md:flex hidden items-center">
        <div className="bg-[url('/Images/BuyBack.png')] bg-cover bg-center md:w-[98%] h-[95%] rounded-3xl text-white hidden md:flex mx-auto">
          <div className="md:w-[40%] space-y-3 md:pt-16 md:pl-16">
            <h2 className="text-4xl font-bold pb-4 leading-[50px]">
              $TCAT & $TCAT <br />
              Buy Back & Burn
            </h2>
            <p className="text-[17px] opacity-40">
              This strategic move demonstrates our commitment to increasing
              token value and benefiting our community. By reducing the total
              supply of TCAT and TSE coins, we aim to create a deflationary
              effect that positively impacts their market value and stability.
            </p>
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className="bg-[#14141c] rounded-3xl h-[80vh] py-3 md:hidden">
        <div className="bg-[url('/Images/BuyBack-mb.png')] w-[93%] h-[100%] bg-cover bg-center rounded-3xl text-white md:hidden mx-auto">
          <div className="md:w-[40%] space-y-3 pt-12 px-5">
            <h1 className="text-2xl font-bold">
              $TCAT & $TCAT <br />
              Buy Back & Burn
            </h1>
            <p className="text-sm leading-6 tracking-wide">
              This strategic move demonstrates our commitment to increasing
              token value and benefiting our community. By reducing the total
              supply of TCAT and TSE coins, we aim to create a deflationary
              effect that positively impacts their market value and stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBackSection;