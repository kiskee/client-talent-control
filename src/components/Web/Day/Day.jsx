import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import { ListDate } from "../../../api";
import { RegisterList } from "../RegisterModal/registerList"

export function Day({ day, number, floor }) {
  let Img = `../../../../Day_${number + 1}.png`;

  const apidays = new ListDate();


  const [tempmornig, settempmornig] = useState([])
  const [tempafternoon, settempafternoon] = useState([])

  const [listmornign, setListmornign] = useState([]);
  const [lsitafternoon, setLsitafternoon] = useState([]);
  const [fulltime, setFulltime] = useState([])
  const [styleDisplay, setStyleDisplay] = useState('none')

  useEffect(() => {

    function updateListTemp() {
      apidays.getListuserForDate(day, floor, "morning", "work").then((response) => {
        settempmornig(response)
      });

      apidays.getListuserForDate(day, floor, "afternoon", "work").then((response) => {
        settempafternoon(response)
      });

      apidays.getListuserForDate(day, floor, "fulltime", "work").then((response) => {
        setFulltime(response);
      });
    }
    updateListTemp()
  }, [floor]);

  useEffect(() => {
    // setTimeout(
    //   () => {
    let tempmorning = [...tempmornig]
    tempmorning.push(fulltime)
    tempmorning = tempmorning.flat()
    setListmornign(tempmorning)


    let tempafter = [...tempafternoon]
    tempafter.push(fulltime)
    tempafter = tempafter.flat()
    setLsitafternoon(tempafter)
    // }
    // , 500)
  }, [fulltime]);



  const showhide = () => {
    setStyleDisplay('block')
  }


  return (
    <>
      <center>
        <div className="card" onClick={() => showhide()}>
          <div style={{marginTop:"-45px"}}>
            <img src='../../../../crown.png' alt="Register" width={"50px"}/>
          </div>
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

        <div>
          <div style={{ display: styleDisplay }}>
            <RegisterList
              setStyleDisplay={setStyleDisplay}

              listmornign={listmornign}
              setListmornign={setListmornign}

              lsitafternoon={lsitafternoon}
              setLsitafternoon={setLsitafternoon}

              fulltime={fulltime}
              setFulltime={setFulltime}

              day = {day}
              floor = {floor}
            /></div>
        </div>
      </center>
    </>
  );
}
