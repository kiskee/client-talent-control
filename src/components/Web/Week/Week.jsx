/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { Day } from "./../Day";
import { Cookie, ListDate } from "../../../api";
import { calculateDays } from "./WeekForm.form";
import { ENV } from "../../../utils";

/* ----------------------------- CLASS INSTANCES ---------------------------- */
const validationCookies = new Cookie();
const apidays = new ListDate();
/* -------------------------------- VARIBLES -------------------------------- */
let day = [];

/* ------------------------------- VALIDATIONS ------------------------------ */

/**
 * If the local storage does not exist,
 * we proceed to create it without importing the rest of the information.
 */
if (!localStorage.getItem(ENV.JWT.DAYS)) {

  console.log('El sistema no tiene almacenamiento local ⟢ ⊱⊱ ⟢ Se crea este')

  validationCookies.getCookieApi().then((response) => {
    localStorage.setItem(
      ENV.JWT.DAYS,
      '{"expired":"' + response.date + '", "days":"' + response.cookie + '"}'
    );
  });
  setTimeout(loadday, "1500");
}
else {
  /**
   * We validate that the day is Friday and after noon.
   * In case of compliance, we calculate the new days and insert them in the db.
   */
  if (new Date().getDay() >= 5 && new Date().getHours() >= 10) {
    let days;
    console.log('Es viernes y son mas de las 12')
    validationCookies.getCookieApi().then((response) => {
      /**
       * We validate if the date in the db is expired.
       * validate
       */

      console.log(new Date(response.date).getHours())
      console.log(new Date().getHours())
      if (new Date(response.date).getDate() < new Date().getDate() && new Date(response.date).getHours() < new Date().getHours()) {

        console.log('La ultima fecha de la db ya esta vencida')

        var dateCalculated = new Date();

        dateCalculated.setDate(dateCalculated.getDate() + 7);
        dateCalculated.setHours(12, 30, 0);

        days = calculateDays(dateCalculated);

        validationCookies.updateCookieApi({
          date: dateCalculated,
          cookie: days.join(","),
        });

        days.forEach((temp) => {
          console.log(temp.toLocaleDateString())
          apidays.createDay(temp.toLocaleDateString());
        });
      }
      /**
       * The date in the DB is already updated, therefore we update the local almanac.
       */
      else {
        localStorage.setItem(
          ENV.JWT.DAYS,
          '{"expired":"' + response.date + '", "days":"' + response.cookie + '"}'
        );
      }
    });
  }
  loadday()
}

function loadday() {
  JSON.parse(localStorage.getItem(ENV.JWT.DAYS))
    .days.split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }));
    });
}
export function Week() {
  const [floor, setfloor] = useState("10");

  const floorSelected = (event) => {
    setfloor(event.target.value);
  };

  return (
    <div className="weeks">
      <center className="floor">
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
