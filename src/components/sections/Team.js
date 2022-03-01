import React from "react";
import Info from "./Info";
import { TEAM } from "../../assets/data/TEAM";

const Team = () => {
  return (
    <div>
      <div className="bg-primaryBlack pt-20 pb-16">
        <div className="lg:w-[1024px] mx-auto px-6 md:px-0">
          <Info />
        </div>

        <div className="lg:w-[960px] mx-auto pt-4">
          <div className="text-center my-8">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              Our <span className="text-accentYellow">Team</span>
            </h1>
          </div>

          <div className="grid-cols-1 gap-9 md:grid-cols-3 grid">
            {TEAM.map((data, index) => (
              <div className="justify-center mx-auto" key={index}>
                <img
                  src={data.avatar}
                  className="w-60 mb-4 mx-auto rounded-full"
                  loading="lazy"
                  alt=""
                />
                <div className="text-center mb-4 max-w-xs">
                  <div className="font-bold text-2xl text-accentYellow mb-2">
                    {data.name}
                  </div>
                  <p className="text-white mb-4 whitespace-pre-line"><div dangerouslySetInnerHTML={ { __html: data.about } }></div></p>
                  {data.link && <a
                    href={data.link}
                    target="_blank"
                    className="inline-block bg-primaryBlue text-white py-2 px-8 rounded-xl"
                  >
                    Learn More
                  </a>}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
