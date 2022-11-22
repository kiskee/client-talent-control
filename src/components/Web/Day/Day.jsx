import React, { useState , useEffect } from "react";
import { ListDate } from "../../../api";

export function Day({ day, number, floor }) {
  let Img = `../../../../Day_${number + 1}.png`;

  const apidays = new ListDate();

  const [listFulltime, setListFulltime] = useState([]);
  const [listmornign, setListmornign] = useState([]);
  const [lsitafternoon, setLsitafternoon] = useState([]);

  // apidays.getListuserForDate(day, floor, "Part-Time moring", "work").then((response)=>{
  //   setListFulltime(response)
  // });


  // apidays.getListuserForDate(day, floor, "Fulltime", "work").then((response)=>{
  //   setListmornign(response)
  // });

  // apidays.getListuserForDate(day, floor, "Fulltime", "work").then((response)=>{
  //   setLsitafternoon(response)
  // });

  


  //setListFulltime(apidays.getListuserForDate(day,"10",'Fulltime',"work"));
  // setListFulltime(apidays.setListmornign(day,floor,'Part-Time morning',"work"))
  // setListFulltime(apidays.setLsitafternoon(day,floor,'Part-Time afternoon',"work"))




  // console.log(listmornign)

  // console.log(listmornign)


  useEffect(() => {

console.log(floor)

console.log(floor.match(/\d+/).pop());

    apidays.getListuserForDate(day, floor, "Part-Time moring", "work").then((response)=>{
      console.log('=============')
      console.log(response)
      setListmornign(response)
    });
  },[floor]);



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
