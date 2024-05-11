// import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";
import Shimmer from "../Shimmer/Shimmer";

const Main = () => {
   const {
      onSent,
      recentPrompt,
      showResult,
      loading,
      resultData,
      setInput,
      input,
   } = useContext(Context);
   return (
      <div className="main">
         <div className="nav">
            <p>AI</p>
            <img src={assets.user_icon} alt="" />
         </div>
         <div className="main-container">
            {!showResult ? (
               <>
                  <div className="greet">
                     <p>
                        <span>hello, user.</span>
                     </p>
                     <p>how can i help you today?</p>
                  </div>
                  <div className="cards">
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Porro, fugit.{" "}
                        </p>
                        <img src={assets.compass_icon} alt="" />
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Porro, fugit.{" "}
                        </p>
                        <img src={assets.bulb_icon} alt="" />
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Porro, fugit.{" "}
                        </p>
                        <img src={assets.message_icon} alt="" />
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Porro, fugit.{" "}
                        </p>
                        <img src={assets.code_icon} alt="" />
                     </div>
                  </div>
               </>
            ) : (
               <>
                  <div className="result">
                     <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                     </div>
                     <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? (
                           <Shimmer />
                        ) : (
                           <p
                              dangerouslySetInnerHTML={{
                                 __html: resultData,
                              }}
                           ></p>
                        )}
                     </div>
                  </div>
               </>
            )}

            <div className="main-bottom">
               <div className="search-box">
                  <input
                     type="text"
                     placeholder="enter a prompt here"
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                  />
                  <div>
                     <img src={assets.gallery_icon} alt="" />
                     <img src={assets.mic_icon} alt="" />
                     <img
                        src={assets.send_icon}
                        alt=""
                        onClick={() => onSent()}
                     />
                  </div>
               </div>
               <p className="bottom-info">
                  ai tool under development. anwser may vary
               </p>
            </div>
         </div>
      </div>
   );
};

export default Main;
