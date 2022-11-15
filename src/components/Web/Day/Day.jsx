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
            <div className="oval left">
              Morning
              <br />
              0/54
            </div>

            <div className="oval right">
              Morning
              <br />
              0/54
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
