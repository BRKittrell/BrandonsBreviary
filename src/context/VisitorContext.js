import {createContext, useState } from "react";

const VistorContext = createContext();

export const VisitorLoginProvider = ({children}) =>{
    const [visitorName, setVisitorName] = useState("");
    const [note, setNote] = useState("")
};

const handleVisitorName = () =>{
setVisitorName(e.target.value);
};

const handleNote = () =>{
    setNote(e.target.value)
}

const handleSubmit = () =>{
    e.preventDefault()
}

return (
    <VistorContext.Provider
    value={{
        vistorName,
        note,
        handleVisitorName,
        handleNote
    }}
    >
    {children}
    </VistorContext.Provider>
)

export default VistorContext