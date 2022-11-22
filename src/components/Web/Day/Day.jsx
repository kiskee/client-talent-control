<<<<<<< HEAD
import React, { useState } from "react";
import { ListDate } from "../../../api";


export function Day({ day, number ,floor}) {
  let Img = `../../../../Day_${number + 1}.png`;

  const apidays = new ListDate();

  const [listFulltime, setListFulltime] = useState([])
const [listmornign, setListmornign] = useState([])
const [lsitafternoon, setLsitafternoon] = useState([])

apidays.getListuserForDate(day,"10",'Fulltime',"work")

//console.log(data)

//setListFulltime(apidays.getListuserForDate(day,"10",'Fulltime',"work"))
// setListFulltime(apidays.setListmornign(day,floor,'Part-Time morning',"work"))
// setListFulltime(apidays.setLsitafternoon(day,floor,'Part-Time afternoon',"work"))


// console.log(listFulltime)

// console.log(listmornign)


// console.log(listmornign)



  return (
    <>
    <center>
      <div className="card">
        <center>
          <h4>
            <b>{day}</b>
          </h4>
=======
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
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
        </center>
        <img src={Img} className="img" />
        <div className="container">
          <div>
            <div className="oval">
              <center>Morning 0/54</center>
            </div>
<<<<<<< HEAD
            <br />
=======
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
            <div className="oval">
              <center>Afternoon 0/54</center>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      </center>
=======

      </center>

>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
    </>
  );
}
