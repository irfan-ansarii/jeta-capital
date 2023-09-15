import React from 'react'
import ProtocolLogo from '../../assets/images/portfolio/iq-protocol.png'
import ChromayLogo from '../../assets/images/portfolio/chromaway-logo.png'
import OasislabsLogo from '../../assets/images/portfolio/oasis-labs-logo.png'
import FantomLogo from '../../assets/images/portfolio/fantom-logo.png'
const Portfolio = () => {
  return (
    <div>
      <div className="lg:w-[960px] mx-auto p-6">
        <div className="my-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl text-primaryBlack font-bold">
                Portfolio
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-full text-center md:text-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className=" text-center">
                  <a
                    href="https://iq.space/"
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="text-center">
                      <img
                        src={ProtocolLogo}
                        alt="IQ Protocol"
                        className="w-full h-full max-w-[10rem] mx-auto"
                      />
                    </div>

                    <div className="text-accentYellow font-bold text-4xl">
                      IQ Protocol
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="https://chromaway.com/"
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="text-center">
                      <img
                        src={ChromayLogo}
                        alt="Chromaway"
                        className="w-full h-full max-w-[10rem] mx-auto"
                      />
                    </div>

                    <div className="text-accentYellow font-bold text-4xl">
                      Chromaway
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="https://www.oasislabs.com/"
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="text-center">
                      <img
                        src={OasislabsLogo}
                        alt="Oasis Labs"
                        className="w-full h-full max-w-[10rem] mx-auto"
                      />
                    </div>

                    <div className="text-accentYellow font-bold text-4xl">
                      Oasis Labs
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="https://fantom.foundation/"
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="text-center">
                      <img
                        src={FantomLogo}
                        alt="Fantom"
                        className="w-full h-full max-w-[10rem] mx-auto"
                      />
                    </div>

                    <div className="text-accentYellow font-bold text-4xl">
                      Fantom
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
