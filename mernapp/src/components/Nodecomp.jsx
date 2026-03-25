import React, { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import { Getvaluesglobal } from "./Wrapper";
import { useAPicalforai, usesaveData } from "../apicall";

export default function Nodecomp({ setAll }) {
    const { result, setResult, loading, setLoading, input, setInput } = Getvaluesglobal()

    const nodes = [
        {
            id: "1",
            position: { x: 50, y: 100 },
            data: {
                label: (
                    <div className="bg-white shadow-lg rounded-xl p-4 w-64">
                        <p className="text-sm font-semibold mb-2 text-gray-600">
                            Input
                        </p>
                        <input
                            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                        />
                    </div>
                ),
            },
        },
        {
            id: "2",
            position: { x: 400, y: 100 },
            data: {
                label: (
                    <div className="bg-white shadow-lg rounded-xl p-4 w-64">
                        <p className="text-sm font-semibold mb-2 text-gray-600">
                            Result
                        </p>
                        <div className="text-gray-700 min-h-[40px]">
                            {loading ? "Thinking..." : result || "Result will appear here"}
                        </div>
                    </div>
                ),
            },
        },
    ];

    const edges = [
        {
            id: "e1-2",
            source: "1",
            target: "2",
            animated: true,
            style: { stroke: "#3b82f6" },
        },
    ];

    const runFlow = async () => {
        if (!input.trim()) {
            alert("Enter prompt");
            return;
        }

        await useAPicalforai({ input, setInput, setResult, setLoading, setAll });
    };

    const resetFlow = () => {
        setInput("");
        setResult("");
    };

    return (
        <div className="h-screen bg-neutral-800 flex flex-col items-center justify-center gap-4">

            <h1 className="text-2xl font-bold text-neutral-200">
                <span className="text-violet-600 shadow-2xl text-shadow-2xs font-bold pulse text-3xl">AI</span> Flow Builder
            </h1>


            <div className="flex gap-3">
                <button
                    onClick={runFlow}
                    disabled={loading}
                    className="px-5 py-2 bg-violet-500 text-white rounded-lg shadow shadow-violet-500 hover:bg-violet-400 disabled:opacity-50"
                >
                    {loading ? "Running..." : "Run Flow"}
                </button>

                <button
                    onClick={resetFlow}
                    className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                    Reset
                </button>
            </div>

            <div className="w-[900px] h-[400px] bg-white rounded-xl shadow-lg p-2">
                <ReactFlow nodes={nodes} edges={edges} fitView />
            </div>
            <div className="flex justify-between">

            </div>
            <div className="flex gap-2 items-center">
                <button className='bg-green-600 w-fit p-3 px-5 rounded-md text-sm text-white font-semibold text-center' onClick={() => usesaveData({ input, setInput, setResult, setLoading, result, setAll })}>save</button>
                <a href="#history" className='bg-violet-500 w-fit p-3 rounded-md text-sm text-white font-semibold text-center'>view history</a>

            </div>

        </div>
    );
}