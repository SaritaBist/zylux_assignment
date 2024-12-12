import React from "react";
import PricingCards from "./PricingCards.jsx";
import { IconMessageDots } from '@tabler/icons-react';
import BottomPage from "./Bottom.jsx";

function Header() {
    return (
        <div className='relative'>
            <div className="flex flex-col">
                <div
                    className="bg-gradient-to-t from-blue-900 to-indigo-700 text-white p-5  h-screen w-full font-['IBM_Plex_Sans','Merriweather']">

                    <div className="flex flex-col  mt-16 justify-center items-center">
                        <h1 className="text-5xl font-bold">Straight Forward Pricing</h1>
                        <p className="text-lg mt-4 max-w-xl text-center text-white/70  ">
                            Our plans are designed to fit every kind of need with unlimited access
                            to all features. Start your free trial, no credit-card required.
                        </p>
                        <button
                            className="mt-6 bg-[#5046e3] px-6 py-2 rounded-lg text-white border-2 border-[#050465] flex gap-1">
                            <IconMessageDots stroke={2}/>
                            Talk to Sales
                        </button>
                    </div>
                    <PricingCards/>

                </div>
                <BottomPage/>
            </div>
        </div>
    );
}

export default Header;
