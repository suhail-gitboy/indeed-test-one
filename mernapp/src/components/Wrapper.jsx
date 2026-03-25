import React, { createContext, createRef, useContext, useRef, useState } from 'react'
const mainref = createContext()

const Wrapper = ({ children }) => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [all, setAll] = useState(null)

    return (
        <>
            <mainref.Provider value={{ all, setAll, result, setResult, loading, setLoading, input, setInput }}>
                {children}
            </mainref.Provider>

        </>
    )
}
export const Getvaluesglobal = () => useContext(mainref)
export default Wrapper
