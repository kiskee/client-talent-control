import React from "react";

export function Day({ day, number }) {
  let Img = `../../../../Day_${number + 1}.png`;

  return (
    <>
    <center>

      <div className="card">
        <center>
          <h5 className="dateText">
            <b>{day}</b>
          </h5>
          <div className="lineBreak"></div>
        </center>
        <img src={Img} className="img" />
        <div className="container">
          <div>
            <div className="oval">
              <center>Morning 0/54</center>
            </div>
            <div className="oval">
              <center>Afternoon 0/54</center>
            </div>
          </div>
        </div>
      </div>

      </center>

    </>
  );
}
