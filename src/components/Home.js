import React from "react";

const Home = () => {
  const clock = () => {
    let d = new Date();
    let date = d.getDate();

    var months = new Array([]);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    var month = months[d.getMonth()];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[d.getDay()];
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let ampm = null;
    let greet = document.querySelector('.greet')

    //adjusting some variables
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }
    // if (hour < 12) {
    //   ampm = "am";
    // } else {
    //   ampm = "pm";
    // }
    // if(hour > 0 && hour<12){
    //   greet = 'Good Morning';
    // }
    // if(hour >= 12 && hour < 17){;
    //   greet = 'Good Afternoon'
    // }
    // if(hour >= 17 && hour < 19){
    //   greet = 'Good Evening';
    // }
    // if(hour >= 19 && hour < 0){
    //   greet = 'Good Night';
    // }
    if(hour<12){
      ampm = "am"
      greet.innerHTML = "Good Morning"
      } 
      else if(hour === 12){
      ampm = "pm"
      greet.innerHTML = "Good Afternoon"
      }
      else if(hour > 12 && hour < 16){
      ampm = "pm"
      greet.innerHTML = "Good Afternoon"
      }
      else if(hour>=16 && hour<19){
      ampm = "pm"
      greet.innerHTML = "Good Evening"
      }
      else if(hour>=19){
      ampm = "pm"
      greet.innerHTML = "Good Night"
      }
    //defining perfect variables
    let today = `${date}th ${month},${year}`;
    let time = `${hour}:${min} ${ampm}`;

    //defining innerHTML's
    document.querySelector(".date").innerHTML = today;
    document.querySelector(".day").innerHTML = day;
    document.querySelector(".time").innerHTML = time;
  };
  setInterval(() => {
    clock();
  }, 1000);
  return (
    <>
      <div className="home">
        <div className="home-nav">
          <div className="greet"></div>
          <div className="time"></div>
          <div className="day"></div>
          <div className="date"></div>
          <div className="search">
            <input type="text" placeholder={"Search Google"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
