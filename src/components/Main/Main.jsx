import './Main.css';
import assets from '@assets';
import Shimmer from '../Shimmer/Shimmer';
import PropTypes from 'prop-types';

const Card = ({ title, icon, altText = '' }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img
        src={icon}
        alt={altText}
      />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  altText: PropTypes.string,
};

const Main = ({
  onSent,
  recentPrompt,
  showResult,
  loading,
  resultData,
  setInput,
  input,
}) => {
  const handleInput = (e) => {
    if (e.key === 'Enter' && e.target.value === '') return;
    const sanitizedInput = e.target.value.replace(/(<([^>]+)>)/gi, '');

    setInput(sanitizedInput);

    if (e.key === 'Enter') {
      onSent();
    }
  };

  const handleSendMessage = () => {
    if (input === '') return;

    onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>AI</p>
        <img
          src={assets.user_icon}
          alt=""
        />
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
              <Card
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugit."
                icon={assets.compass_icon}
                altText="compass icon"
              />
              <Card
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugit."
                icon={assets.bulb_icon}
                altText="bulb icon"
              />
              <Card
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugit."
                icon={assets.message_icon}
                altText="message icon"
              />
              <Card
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugit."
                icon={assets.code_icon}
                altText="code icon"
              />
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img
                  src={assets.user_icon}
                  alt=""
                />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img
                  src={assets.gemini_icon}
                  alt=""
                />
                {loading ? (
                  <Shimmer />
                ) : typeof resultData === 'string' ? (
                  <p>{resultData}</p>
                ) : null}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="enter a prompt here"
              onChange={handleInput}
              onKeyDown={handleInput}
              value={input}
            />
            <div>
              <img
                src={assets.gallery_icon}
                alt=""
              />
              <img
                src={assets.mic_icon}
                alt=""
              />
              <img
                src={assets.send_icon}
                alt=""
                onClick={handleSendMessage}
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

Main.propTypes = {
  onSent: PropTypes.func,
  recentPrompt: PropTypes.string,
  showResult: PropTypes.bool,
  loading: PropTypes.bool,
  resultData: PropTypes.string,
  setInput: PropTypes.func,
  input: PropTypes.string,
};
