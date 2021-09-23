import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(null);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-item">
            <i
              className="bi bi-list"
              id="menuBtn"
              onClick={() =>
                setMenu(
                  document.querySelector(".sidebar").classList.toggle("active")
                )
              }
            ></i>
          </div>
        </div>
        <div className="sidebar-bot">
          <div className="sidebar-item">
            <i className="bi bi-question-circle"></i>
            <div className="tooltip">Help</div>
          </div>
          <div className="sidebar-item">
            <Link to="/" onClick={() => setProgress(100)}>
              <i className="bi bi-house"></i>
              <div className="tooltip">Home</div>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/apps" onClick={() => setProgress(100)}>
              <i className="bi bi-grid"></i>
              <div className="tooltip">Apps</div>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/settings" onClick={() => setProgress(100)}>
              <i className="bi bi-sliders"></i>
              <div className="tooltip">Settings</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
