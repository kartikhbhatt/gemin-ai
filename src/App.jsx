// import React from "react";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import useChat from '@hooks/useChat';

function App() {
  const {
    previousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    loadPrompt,
  } = useChat();
  return (
    <>
      <Sidebar
        onSent={onSent}
        previousPrompt={previousPrompt}
        setRecentPrompt={setRecentPrompt}
        newChat={newChat}
        loadPrompt={loadPrompt}
      />
      <Main
        onSent={onSent}
        recentPrompt={recentPrompt}
        showResult={showResult}
        loading={loading}
        resultData={resultData}
        setInput={setInput}
        input={input}
      />
    </>
  );
}

export default App;
