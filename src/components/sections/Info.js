import React from "react";

import CoinImg from "../../assets/images/offer/coin.jpg";
import GroupImg from "../../assets/images/offer/group.jpg";
const Info = () => {
  return (
    <div>
      <div className="flex item-center justify-between flex-wrap text-white">
        <div className="w-full md:w-1/2">
          <div className="text-center md:text-left md:border-r border-accentYellow">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Why <span className="text-accentYellow">Jeta Capital</span>
            </h1>
            <div className="flex items-center">
              <div className="w-4/5 mx-auto md:ml-0">
                <p>
                  By choosing to work with Jeta Capital, you are already one
                  step closer to success. We help you realize your vision
                  and beyond. We possess industry leading experience and
                  resources to bring your innovative ideas to reality.
                </p>
              </div>
            </div>
          </div>
          <div className="w-16 md:hidden bg-accentYellow mx-auto h-px my-8"></div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              We <span className="text-accentYellow">Offer</span>
            </h1>
            <div className="flex items-center justify-center">
              <div className="w-4/5">
                <img
                  src={CoinImg}
                  alt=""
                  className="w-14 mx-auto mb-2 rounded-full"
                />
                <div className="text-accentYellow mb-4 text-base">
                  <p>
                    Advisory on token metrics, operations, go to market
                    strategy, execution and operations.
                  </p>
                </div>
                <img
                  src={GroupImg}
                  alt=""
                  className="w-14 mx-auto mb-2 rounded-full"
                />
                <div className="text-accentYellow text-base" id="our-team">
                  <p>
                    Access to our wealth of connections including partner VC
                    firms, top exchanges, marketing, PR firms and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-16 md:hidden bg-accentYellow mx-auto h-px my-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
