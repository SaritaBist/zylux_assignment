import React from "react";
import { IconArrowRight } from '@tabler/icons-react';


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
        <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>

                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white group text-gray-800 px-6 py-5 mb-8 rounded-lg shadow-lg h-[90%] transition-transform hover:-translate-y-1 "
                    >
                        <h2 className="text-2xl font-semibold text-indigo-700">{plan.title}</h2>
                        <p className="text-2xl font-bold mt-4 text-[#41396e]">{plan.price}</p>
                        <ul className="mt-4 space-y-2 h-[40%]">
                            {plan.features.map((feature, idx) => (
                                <>
                                    <li key={idx} className="text-sm  last:border-b-0  border-b border-gray-200 py-2 ">
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

                        <button
                            className="mt-12 px-4 py-1 rounded-lg font-bold flex gap-1 w-full  items-center justify-center  text-[#4438ca]  group-hover:bg-indigo-700 group-hover:text-white">
                            Free Trial
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>

                    </div>
                ))}


        </div>
    )
}
export default PricingCards