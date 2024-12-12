import React from "react";
import { IconArrowRight } from '@tabler/icons-react';
import BottomPage from "./Bottom.jsx";

const pricingPlans = [
    {
        title: "Solo",
        price: "$19/month",
        features: ["Invite up to 3 clients", "No contributors", "Support"],
        addon: "White-label",

    },
    {
        title: "Team",
        price: "$29/month",
        features: ["Invite up to 3 clients", "Lorem ipsum dolor sit amet"],
        addon: "White-label",

    },
    {
        title: "Company",
        price: "$229/month",
        features: ["Invite up to 3 clients", "No contributors"],
        addon: "White-label",

    },
    {
        title: "Custom",
        price: "Get a Quote",
        features: ["Invite up to 3 clients","No contributors", "Lorem ipsum dolor sit amet"],

    },
];

const PricingCards=()=>{
    return(
        <div className='w-[95%] mx-auto  absolute top-[30%] '>
            <div className="grid  grid-cols-1  lg:grid-cols-4 gap-4">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white group text-gray-800 px-6 py-3 rounded-lg shadow-lg h-[90%] transition-transform hover:-translate-y-1 "
                    >
                        <h2 className="text-2xl font-semibold text-[#464a95]">{plan.title}</h2>
                        <p className="text-xl font-bold mt-4 text-[#41396e]">{plan.price}</p>
                        <ul className="mt-4 space-y-2 h-[40%]">
                            {plan.features.map((feature, idx) => (
                                <>
                                    <li key={idx} className="text-sm  border-b border-gray-200 py-2 ">
                                        {feature}
                                    </li>

                                </>
                            ))}
                            {plan.addon && (
                                <div className='flex  '>
                                    {plan.addon}(add-on)
                                </div>
                            )}
                        </ul>

                        <button className="mt-12 px-4 py-1 rounded-lg font-bold flex gap-2 w-full  justify-center  text-[#4438ca]  group-hover:bg-[#4438ca] group-hover:text-white">
                            Free Trial
                            <IconArrowRight stroke={2} />
                        </button>

                    </div>
                ))}
            </div>

        </div>
    )
}
export  default PricingCards