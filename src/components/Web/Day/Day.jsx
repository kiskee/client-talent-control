import React, { useState, useEffect } from "react";
import { ListDate } from "../../../api";

export function Day({ day, number, floor }) {
  let Img = `../../../../Day_${number + 1}.png`;

  const apidays = new ListDate();

  const [listmornign, setListmornign] = useState([]);
  const [lsitafternoon, setLsitafternoon] = useState([]);
  const [fulltime, setFulltime] = useState([])

  useEffect(() => {
    apidays.getListuserForDate(day, floor, "morning", "work").then((response) => {
      setListmornign(response)
    });

    apidays.getListuserForDate(day, floor, "afternoon", "work").then((response) => {
      setLsitafternoon(response)
    });

    apidays.getListuserForDate(day, floor, "fulltime", "work").then((response) => {
      if (response.length > 0) {
        setFulltime(response);
      }
    });
  }, [floor]);

  useEffect(() => {
    let tempmorning = [...listmornign]
    tempmorning.push(fulltime)
    tempmorning= tempmorning.flat()
    setListmornign(tempmorning)


    let tempafter = [...lsitafternoon]
    tempafter.push(fulltime)
    tempafter= tempafter.flat()
    setLsitafternoon(tempafter)


  },[fulltime,floor]);

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
                <center>Morning {listmornign.length}/54</center>
              </div>

              <div className="oval">
                <center>Afternoon {lsitafternoon.length}/54</center>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
