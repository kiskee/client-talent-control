import React from "react";


export function Day ({ day, number }) {
  let Img = `../../../../public/Day_${number + 1}.png`;


  return (
    <div className="card">
      <center> 
        <h4>
          <b>{day}</b>
        </h4>
      </center>
      <img src={Img} className="img" />
      <div className="container">
        <div>
          <center className="oval">0/54</center>
        </div>
      </div>
    </div>
  );
};


