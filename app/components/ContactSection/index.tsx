import React from "react";

export const ContactSection = () => {
  return (
    <section className="bg-[#120e11] text-white w-screen py-12 md:px-5 px-3">
      <div className="w-[95%] md:w-[90%] container mx-auto bg-gradient-contact py-10 md:pl-20 px-5 rounded-3xl md:h-[350px] h-[390px] flex items-center">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl">Contact Us</h3>
          <p className="pr-3">
            If you have any questions, feedback, or need assistance, feel <br />{" "}
            free to reach out to us via email.
          </p>
          <h1 className="md:text-4xl text-xl md:font-semibold uppercase">
            @interstellarbot.io
          </h1>
          <div className="md:flex space-y-4 md:space-y-0 gap-x-7 pt-3 pb-2">
            <p>Privacy Policy</p>
            <p>User Guide</p>
          </div>
          <p>© 2024 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;