import { useState } from 'react';
import runChat from '../config/gemani';

const useChat = () => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 55 * index);
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    let responseArray = response.split('**');
    let newResponse = '';
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 != 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += '<b>' + responseArray[i] + '</b>';
      }
    }
    let newResponse2 = newResponse.split('*').join('</br>');
    let newResponseArray = newResponse2.split(' ');
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextword = newResponseArray[i];
      delayPara(i, nextword + ' ');
    }
    setLoading(false);
    setRecentPrompt(input);
    setInput('');
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return {
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
    newChat,
    loadPrompt,
  };
};

export default useChat;
