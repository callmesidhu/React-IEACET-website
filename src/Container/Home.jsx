import React, { useState } from 'react';

function Home() {
  const [showIframe, setShowIframe] = useState(false);

  const handleToggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div className="container p-5">
      <div className="row">
        {/* Text Section */}
        <div className="main-text-div p-5">
          <h1 className="display-1 card-head ani">Industrial Engineering</h1>
        </div>
        {!showIframe && (
        <button className="btn btn-primary" style={{ marginTop: '70px', width: ''  }} onClick={handleToggleIframe}>
            Show Magazine
          </button>)}

        {/* Iframe Section */}
        {showIframe && (
          <div className="col-12">
            <div className="iframe-container position-relative">
              <button
                className="btn btn-danger position-absolute"
                style={{ top: 10, right: 10, zIndex: 1 }}
                onClick={() => setShowIframe(false)}
              >
                X
              </button>
              <iframe
                src="https://online.fliphtml5.com/xuegg/kjqg/"
                width="100%"
                height="700px"
                title="FlipHTML Content"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
