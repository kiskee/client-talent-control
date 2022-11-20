import React from "react";

export function Day({ day, number }) {
  let Img = `../../../../Day_${number + 1}.png`;

  return (
    <>
      <div className="card">
        <center>
          <h4>
            <b>{day}</b>
          </h4>
        </center>
        <img src={Img} className="img" />
        <div className="container">
          <div>
            <div className="oval">
              <center>Morning 0/54</center>
            </div>
            <br />
            <div className="oval">
              <center>Afternoon 0/54</center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
