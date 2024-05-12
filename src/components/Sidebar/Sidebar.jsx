import './Sidebar.css';
import assets from '@assets';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ previousPrompt, newChat, loadPrompt }) => {
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
        <div
          onClick={() => newChat()}
          className="new-chat"
        >
          <img
            src={assets.plus_icon}
            alt=""
          />

          {expand ? <p>New Chat</p> : null}
        </div>

        {expand ? (
          <div className="recent">
            <div className="recent-title">Recent</div>
            {previousPrompt.map((item, index) => {
              return (
                <div
                  key={index}
                  className="recent-entry"
                  onClick={() => loadPrompt(item)}
                >
                  <img
                    src={assets.message_icon}
                    alt=""
                  />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            src={assets.question_icon}
            alt=""
          />
          {expand ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img
            src={assets.history_icon}
            alt=""
          />
          {expand ? <p>activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img
            src={assets.setting_icon}
            alt=""
          />
          {expand ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  previousPrompt: PropTypes.array,
  newChat: PropTypes.func,
  loadPrompt: PropTypes.func,
};
