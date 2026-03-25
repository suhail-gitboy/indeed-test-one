import { response } from "express";
import { FunctionAPIcall } from "./Aicalll.js"
import { Query } from "../Model.js";

export const GETaiData = async (req, res) => {
    const { text
    } = req.body


    if (!text) throw new Error("no text found")

    try {
        try {
            const response = await FunctionAPIcall(text);

            if (response == null) {
                return res.status(400).json("error found,try more")
            }
            console.log(response);
            res.status(200).json({ promtext: response })
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
            } else {
                console.log(err.message);
            }
        }


    } catch (error) {


        res.status(500).json({ message: `error found:${error}` })

    }


}


export const Savedatata = async (req, res) => {
    try {
        const { question, answer } = req.body;

        console.log(question, answer);

        if (!question || !answer) {
            return res.status(400).json({ message: "Missing data" });
        }

        const newQuery = await Query.create({
            question,
            answer,
        });


        const getall = await Query.find().sort({ createdAt: -1 })

        res.status(201).json({

            message: "Saved successfully",
            item: getall,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}


export const Getalldata = async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });

        res.json(queries);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}