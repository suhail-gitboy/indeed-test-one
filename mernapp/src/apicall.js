import axios from "axios";
import { Getvaluesglobal } from "./components/Wrapper";
export const serverURL = "https://indeed-test-one.onrender.com"
export const useAPicalforai = async ({ input, setInput, setResult, setLoading }) => {
    try {
        setLoading(true);
        console.log(input);

        const res = await axios.post(`${serverURL}/api/ask-ai`, {
            text: input,
        });
        console.log(res);
        if (res.status == 400) {
            alert(res.data)
        }

        if (res.status === 200) {
            setResult(res.data.promtext);

        }

    } catch (error) {
        console.error("Error calling AI API:", error);
    } finally {
        setLoading(false);
    }
};


export const usesaveData = async ({ setAll, input, setInput, setResult, setLoading, result }) => {
    try {
        setLoading(true);
        console.log(input);

        const res = await axios.post(`${serverURL}/api/save`, {
            question: input,
            answer: result
        });
        console.log(res);

        if (res.status === 201) {
            setAll(res.data.item)
            alert("saved check history")

        }

    } catch (error) {
        console.error("Error calling AI API:", error);
    } finally {
        setLoading(false);
    }

}