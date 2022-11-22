/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { Day } from "./../Day";
import { Cookie, ListDate } from "../../../api";
import { calculateDays, mostrar } from "./WeekForm.form";
import { ENV } from "../../../utils";

/* ----------------------------- CLASS INSTANCES ---------------------------- */
const validationCookies = new Cookie();
const apidays = new ListDate();
/* -------------------------------- VARIBLES -------------------------------- */
<<<<<<< HEAD
let day = [];
/* ------------------------------- validations ------------------------------ */
=======


console.log(apidays.getListuserForDate())







let day = [];
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9

if (!localStorage.getItem(ENV.JWT.DAYS)) {
  // You do not have the localStorage
  validationCookies.getCookieApi().then((response) => {
    let days;

    console.log(response);

    if (
      new Date().toLocaleDateString() >
      new Date(response.date).toLocaleDateString()
    ) {
      //We must update the API information

      var dateCalculated = new Date();

      dateCalculated.setDate(dateCalculated.getDate() + 7);
      dateCalculated.setHours(12, 30, 0);

      days = calculateDays(dateCalculated);

<<<<<<< HEAD
      days.forEach((temp) => {
        apidays.createDay(temp);
      });

=======
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
      validationCookies.updateCookieApi({
        date: dateCalculated,
        cookie: days.join(","),
      });
    } else {
      localStorage.setItem(
        ENV.JWT.DAYS,
        '{"expired":"' + response.date + '", "days":"' + response.cookie + '"}'
      );
    }
  });
  setTimeout(loadday, "1500");
<<<<<<< HEAD
} else {
  //Local storage

  let exp = JSON.parse(localStorage.getItem(ENV.JWT.DAYS)).expired;
  let days;
  if (new Date(exp).toGMTString() < new Date()) {
    // The current faith is higher than the date
=======
} else {//Local storage

  let exp = JSON.parse(localStorage.getItem(ENV.JWT.DAYS)).expired
  let days;
  if (new Date(exp).toGMTString() < new Date()) {// The current faith is higher than the date
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
    var dateCalculated = new Date();

    dateCalculated.setDate(dateCalculated.getDate() + 7);
    dateCalculated.setHours(12, 30, 0);

    days = calculateDays(dateCalculated);

<<<<<<< HEAD
    days.forEach((temp) => {
      apidays.createDay(temp);
    });

=======
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
    validationCookies.updateCookieApi({
      date: dateCalculated,
      cookie: days.join(","),
    });
  }
<<<<<<< HEAD
  loadday();
=======
  loadday()
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
}

function loadday() {
  JSON.parse(localStorage.getItem(ENV.JWT.DAYS))
    .days.split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
}
<<<<<<< HEAD
//

export function Week() {
  const [floor, setfloor] = useState("10");

  const floorSelected = (event) => {
    setfloor(event.target.value);
  };

  return (
    <div className="weeks">
      <center>
=======
// 

const floorSelected = (event) => {
  console.log(event.target.value);
};

export function Week() {
  console.log(day);
  return (
    <div className="weeks">
      <center className="select-dropdown-pad">
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
        <div className="select-dropdown">
          <select onChange={() => floorSelected(event)}>
            <option value="10th floor">10th floor</option>
            <option value="9th floor">9th floor</option>
          </select>
        </div>
      </center>
<<<<<<< HEAD
      <div className="container days" onClick={() => mostrar()}>
        {day.map((element, index) => (
          <div key={element}>
            <Day day={element} number={index} floor={floor} />
          </div>
        ))}
      </div>
=======
        <div className="container days" onClick={() => mostrar()}>
          {day.map((element, index) => (
            <div key={element}>
              <Day day={element} number={index} />
            </div>
          ))}
        </div>
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
    </div>
  );
}
