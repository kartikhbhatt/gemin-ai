// import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
   const [expand, setExpand] = useState(false);
   const { onSent, previousPrompt, setRecentPrompt, newChat } =
      useContext(Context);

   const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt);
      await onSent(prompt);
   };

   return (
      <div className="sidebar">
         <div className="top">
            <img
               className="menu"
               src={assets.menu_icon}
               alt=""
               onClick={() => setExpand(!expand)}
            />
            <div onClick={() => newChat()} className="new-chat">
               <img src={assets.plus_icon} alt="" />
               {expand ? <p>New Chat</p> : null}
            </div>
            {expand ? (
               <div className="recent">
                  <div className="recent-title">Recent</div>
                  {previousPrompt.map((item, index) => {
                     return (
                        <div
                           className="recent-entry"
                           key={index}
                           onClick={() => loadPrompt(item)}
                        >
                           <img src={assets.message_icon} alt="" />
                           <p>{item.slice(0, 18)}...</p>
                        </div>
                     );
                  })}
               </div>
            ) : null}
         </div>
         <div className="bottom">
            <div className="bottom-item recent-entry">
               <img src={assets.question_icon} alt="" />
               {expand ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
               <img src={assets.history_icon} alt="" />
               {expand ? <p>activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
               <img src={assets.setting_icon} alt="" />
               {expand ? <p>Settings</p> : null}
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
