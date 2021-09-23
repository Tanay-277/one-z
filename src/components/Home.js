import React from "react";
const Home = () => {


  return (
    <>
      <div className="home">
        <div className="home-nav">
          <div className="greet" ></div>
          <div className="time" ></div>
          <div className="day" ></div>
          <div className="date" ></div>
          <div className="query" >
            <input
              type="text"
              className="search"
              placeholder={"Search Google"}
            />
            <i className="bi bi-search searchBtn"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
