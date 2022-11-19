/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { Day } from "./../Day";
import { Cookie } from "../../../api";
import { calculateDays, itisFriday } from "./WeekForm.form";

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

  if (itisFriday()) {
    // The current Date it's Friday; as it is Friday we update the API

    validationCookies.getCookieApi().then((response) => {
      let days;
      if (new Date(response.date) < new Date()) {
        var dateCalculated = new Date();

        dateCalculated.setDate(dateCalculated.getDate() + 7);
        dateCalculated.setHours(12, 30, 0);

        days = calculateDays(dateCalculated);

        validationCookies.updateCookieApi({
          date: dateCalculated,
          cookie: days.join(","),
        });
      }

      document.cookie =
        "Days of the week" +
        "=" +
        days +
        "; expires=" +
        dateCalculated.toGMTString() +
        "; path=/";
    });
  } else {
    // The current date is not Friday; we create temporary cookies in the API
    validationCookies.getCookieApi().then((response) => {
      console.log(response.date);
      document.cookie =
        "Days of the week" +
        "=" +
        response.cookie +
        "; expires=" +
        new Date(response.date).toGMTString() +
        "; path=/";
    });
  }
}

const dayys = () => {
  let cookiesDaysoftheWeek = document.cookie
    .split(";")
    .filter((x) => x.search("Days of the week") > -1);
  cookiesDaysoftheWeek[0]
    .split("=")
    .pop()
    .split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
};

setTimeout(dayys, "1500");

const floorSelected = (event) => {
  console.log(event.target.value);
};

export function Week() {
  console.log(day);
  return (
    <div className="weeks">
      <center>
        <div className="select-dropdown">
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
