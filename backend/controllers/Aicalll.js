import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const FunctionAPIcall = async (prompt) => {
    console.log(prompt, "prompt");

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "nvidia/nemotron-3-nano-30b-a3b:free",
                messages: [{ role: "user", content: `must be very two line answer the question:${prompt}` }],
                max_tokens: 300,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const aiResponse = response.data.choices[0].message.content;

        return aiResponse;

    } catch (err) {
        console.error(err.response?.data || err.message);
        return null;
    }
};