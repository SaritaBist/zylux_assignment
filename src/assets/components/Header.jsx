import React from "react";
import PricingCards from "./PricingCards.jsx";
import BottomPage from "./Bottom.jsx";

function Header() {
    return (
        <div className="flex flex-col gap-10 pb-52 ">
            <div className=" font-['IBM_Plex_Sans','Merriweather']">
                <div className="relative mx-auto w-screen">
                    <div className="absolute inset-0 bottom-32 bg-gradient-to-t from-blue-900 to-indigo-700 border-b-8 border-indigo-700">
                    </div>
                    <div className="relative mx-auto w-full max-w-screen-xl px-2 pt-20 text-left sm:px-10">
                        <div className="mb-16 text-center">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl">
                                Straight Forward Pricing
                            </h1>
                            <p className="mx-auto mt-4 max-w-xl text-white/70">
                                Our plans are designed to fit every kind of need with unlimited access to all features.
                                Start your free trial, no credit-card required.
                            </p>
                            <button
                                className="mx-auto mt-8 flex items-center rounded-lg border border-black bg-indigo-600 px-4 py-2 font-semibold text-white hover:border-white hover:bg-indigo-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                    </path>
                                </svg>
                                Talk to Sales
                            </button>
                        </div>
                      <PricingCards/>
                    </div>
                </div>
            </div>
            <BottomPage/>

        </div>

    );
}

export default Header;
