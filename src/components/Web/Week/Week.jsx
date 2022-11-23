/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { Day } from "./../Day";
import { Cookie, ListDate } from "../../../api";
import { calculateDays} from "./WeekForm.form";
import { ENV } from "../../../utils";

/* ----------------------------- CLASS INSTANCES ---------------------------- */
const validationCookies = new Cookie();
const apidays = new ListDate();
/* -------------------------------- VARIBLES -------------------------------- */
let day = [];

/* ------------------------------- VALIDATIONS ------------------------------ */
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

      days.forEach((temp) => {
        apidays.createDay(temp);
      });

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
  
} else {//Local storage

  let exp = JSON.parse(localStorage.getItem(ENV.JWT.DAYS)).expired
  let days;
  if (new Date(exp).toGMTString() < new Date()) {// The current faith is higher than the date

    var dateCalculated = new Date();

    dateCalculated.setDate(dateCalculated.getDate() + 7);
    dateCalculated.setHours(12, 30, 0);

    days = calculateDays(dateCalculated);

    days.forEach((temp) => {
      apidays.createDay(temp);
    });

    validationCookies.updateCookieApi({
      date: dateCalculated,
      cookie: days.join(","),
    });
  }
  loadday()
}

function loadday() {
  JSON.parse(localStorage.getItem(ENV.JWT.DAYS))
    .days.split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
}

export function Week() {
  const [floor, setfloor] = useState("10");

  const floorSelected = (event) => {
    setfloor(event.target.value);
  };

  return (
    <div className="weeks">
      <center className='floor'>
        <div className="select-dropdown">
          <select onChange={() => floorSelected(event)}>
            <option value="10th floor">10th floor</option>
            <option value="9th floor">9th floor</option>
          </select>
        </div>
      </center>
      <div className="container days">
        {day.map((element, index) => (
          <div key={element}>
            <Day day={element} number={index} floor={floor} />
          </div>
        ))}
      </div>
    </div>
  );
}