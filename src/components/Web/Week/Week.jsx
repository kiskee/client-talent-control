/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from 'react';
import { Day } from "./../Day";
import { Cookie } from "../../../api";
import {
  calculateDays,
  itisFriday,
} from "./WeekForm.form";


/* ----------------------------- CLASS INSTANCES ---------------------------- */
const validationCookies = new Cookie();

/* -------------------------------- VARIBLES -------------------------------- */
let day = [];

/* ---------------------------- We filter cookies --------------------------- */
let cookiesDaysoftheWeek = document.cookie
  .split(";")
  .filter((x) => x.search("Days of the week") > -1);

if (cookiesDaysoftheWeek.length == 0) {
  // The users no has cookies

  //let { cookie, date } = //await validationCookies.getCookieApi();

  if (itisFriday()) {
    // The current Date it's Friday; as it is Friday we update the API
    let days
    if (new Date(dateAPi) < new Date()) {
      var dateCalculated = new Date();

      dateCalculated.setDate(dateCalculated.getDate() + 7);
      dateCalculated.setHours(12, 30, 0);

      days = calculateDays(dateCalculated);

      validationCookies.updateCookieApi({
        date: dateCalculated,
        cookie: days.join(","),
      });
    }

    document.cookie = "Days of the week" + "=" + days + "; expires=" + dateCalculated + "; path=/";
  } else {
    // The current date is not Friday; we create temporary cookies in the API
   


   validationCookies.getCookieApi()
   .then((response)=>{
    document.cookie =
      "Days of the week" + "=" + response.cookie + "; expires=" + response.date + "; path=/";
   })
  }
} else {
  cookiesDaysoftheWeek[0]
    .split("=")
    .pop()
    .split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
}


// if (cookiesDaysoftheWeek.length == 0) {
//   // As the cookies were not found; a new cookie is created and expires every Friday.

//   var date = new Date();

//   date.setDate(date.getDate() + 7);
//   date.setHours(12, 30, 0);

//   let days = calculateDays(date);
//   document.cookie =
//     "Days of the week" + "=" + days + "; expires=" + date + "; path=/";

// } else {
//   cookiesDaysoftheWeek[0]
//     .split("=")
//     .pop()
//     .split(",")
//     .forEach((temp) => {
//       day.push(new Date(temp).toLocaleDateString());
//     });
// }

// function tarea(){
//   console.log('acá va la tarea', new Date());
// }

// function lanzarElDia(momento, tarea){
//   console.log('lanzado',new Date());
//   console.log('para ser ejecutado en',momento);
//   setTimeout(tarea, momento.getTime()-(new Date()).getTime());
// }

// lanzarElDia(new Date('2016-06-10 20:29'), tarea);

const floorSelected = (event) => {
  console.log(event.target.value);
};

export function Week() {
  return (
    <div>
      <center>
        <div className="filterFLoor">
          <select onChange={() => floorSelected(event)}>
            <option value="10th floor">10th floor</option>
            <option value="9th floor">9th floor</option>
          </select>
        </div>
      </center>

      <div>
        {day.map((element, index) => (
          <div key={element}>
            <Day day={element} number={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
