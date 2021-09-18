import React from "react";

const Home = () => {
  const clock = ()=>{
    let date = new Date();
    date = date.getTime()

  }
  return (
    <>
      <div className="home">
        <div className="home-nav">
          <div className="greet">Good Evening</div>
          <div className="time">19:25 pm</div>
          <div className="day">Monday</div>
          <div className="date">26th January,2021</div>
        </div>
      </div>
    </>
  );
};

export default Home;
