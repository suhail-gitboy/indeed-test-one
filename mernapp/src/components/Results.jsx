import React from "react";
import { Getvaluesglobal } from "./Wrapper";

const Results = ({ all }) => {



    return (
        <div className="min-h-screen bg-neutral-900 py-10 px-4">


            <div className="flex justify-center mb-8">
                <h3 className="px-6 py-2 rounded-lg text-2xl text-white font-semibold bg-neutral-800 shadow-md">
                    History
                </h3>
            </div>


            <div id="history" className="max-w-3xl mx-auto space-y-4">
                {all?.length == 0 ? <>no history</> :
                    all?.map((item) => (
                        <div
                            key={item?._id}
                            className="bg-neutral-800 p-5 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <p className="text-sm text-gray-400 mb-1">Question</p>
                            <p className="text-white font-medium mb-3">
                                {item?.question}
                            </p>

                            <p className="text-sm text-gray-400 mb-1">Answer</p>
                            <p className="text-green-400">
                                {item?.answer}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Results;