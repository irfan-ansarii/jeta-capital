import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-primaryBlue py-10" id="contact-us">
        <div className="lg:w-[960px] mx-auto p-6">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-full md:w-[960px] mx-auto mt-8 md:mt-4">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl text-white font-bold">
                  Get <span className="text-accentYellow">In Touch</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between items-center flex-wrap md:mt-4">
            <div className="w-full md:w-1/3 p-4">
              <a
                href="mailto:research@jetacapital.io?subject=Funding Inquiry - JETA CAPITAL"
                className="w-56 bg-white font-bold py-4 text-center rounded-xl block mx-auto"
              >
                Funding Inquiry
              </a>
            </div>

            <div className="w-full md:w-1/3 p-4">
              <a
                href="mailto:research@jetacapital.io?subject=General Inquiry - JETA CAPITAL"
                className="w-56 bg-white font-bold py-4 text-center rounded-xl block mx-auto"
              >
                General Inquiry
              </a>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <a
                href="mailto:research@jetacapital.io?subject=Press Inquiry - JETA CAPITAL"
                className="w-56 bg-white font-bold py-4 text-center rounded-xl block mx-auto"
              >
                Press Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
