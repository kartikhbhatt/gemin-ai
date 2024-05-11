// import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
   const [expand, setExpand] = useState(false);

   return (
      <div className="sidebar">
         <div className="top">
            <img
               className="menu"
               src={assets.menu_icon}
               alt=""
               onClick={() => setExpand(!expand)}
            />
            <div className="new-chat">
               <img src={assets.plus_icon} alt="" />
               {expand ? <p>New Chat</p> : null}
            </div>
            {expand ? (
               <div className="recent">
                  <div className="recent-title">Recent</div>
                  <div className="recent-entry">
                     <img src={assets.message_icon} alt="" />
                     <p>what is react?....</p>
                  </div>
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
