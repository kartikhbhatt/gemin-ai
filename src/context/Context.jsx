import { createContext, useState } from "react";
import runChat from "../config/gemani";

export const Context = createContext();

const ContextProvider = (props) => {
   const [input, setInput] = useState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [previousPrompt, setPreviousPrompt] = useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const [resultData, setResultData] = useState(false);

   const onSent = async (prompt) => {
      setResultData("");
      setLoading(true);
      setShowResult(true);

      const response = await runChat(input);
      setResultData(response);
      setLoading(false);
      setRecentPrompt(input);
      setInput("");
   };

   const contextValue = {
      previousPrompt,
      setPreviousPrompt,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      setShowResult,
      loading,
      setLoading,
      setResultData,
      resultData,
      input,
      setInput,
   };
   return (
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
   );
};

export default ContextProvider;
