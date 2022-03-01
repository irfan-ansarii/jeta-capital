import React from "react";
import ProtocolLogo from "../../assets/images/portfolio/iq-protocol.png";
import LunaverseLogo from "../../assets/images/portfolio/lunaverse.png";
const Portfolio = () => {
  return (
    <div>
      <div className="lg:w-[960px] mx-auto p-6">
        <div className="my-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl text-primaryBlack font-bold">
                Our <span className="text-accentYellow">Portfolio</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            
            <div className="w-full text-center md:text-right">
              <div className="flex items-center justify-center justify-center">
              <a href="https://iq.space/" className="inline-block" target="_blank">
                <div className="text-center">
                  <img
                    src={ProtocolLogo}
                    alt="IQ Protocol"
                    className="w-16 rounded-full mx-auto"
                  />
                </div>

                <div className="text-accentYellow font-bold text-4xl">
                  
                    IQ Protocol
                 
                </div>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
