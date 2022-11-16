import React from "react";
import { Day } from './../Day'


/**
 * @returns Return on the first Monday of the week
 */

const FirstMondayoftheWeek = (dateEnter) => {
  var dateCurrent = new Date(dateEnter);

  let daytoSubtract = dateCurrent.getUTCDay();
  let day;
  if (daytoSubtract == 0) {
    day = -6;
  } else {
    day = (daytoSubtract - 1) * -1;
  }

  dateCurrent.setDate(dateCurrent.getDate() + (day - 1));

  return dateCurrent;
};

/**
 * @returns Returns an array with each of the dates of the day of the week.
 */
const calculateDays = (dateEnter) => {
  let date = FirstMondayoftheWeek(dateEnter);

  let days = [];

  for (let i = 1; i < 6; i++) {
    let tempdate = date.getTime() + 86400000 * i;
    days.push(new Date(tempdate));
  }
  return days;
};

let cookiesDaysoftheWeek = document.cookie
  .split(";")
  .filter((x) => x.search("Days of the week") > -1);

let day = [];
if (cookiesDaysoftheWeek.length == 0) {
  // As the cookies were not found; a new cookie is created and expires every Friday.

  var date = new Date();

  date.setDate(date.getDate() + 7);
  date.setHours(12, 30, 0);

  let days = calculateDays(date);
  document.cookie =
    "Days of the week" + "=" + days + "; expires=" + date + "; path=/";
} else {
  cookiesDaysoftheWeek[0]
    .split("=")
    .pop()
    .split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
}

// function tarea(){
//   console.log('acá va la tarea', new Date());
// }

// function lanzarElDia(momento, tarea){
//   console.log('lanzado',new Date());
//   console.log('para ser ejecutado en',momento);
//   setTimeout(tarea, momento.getTime()-(new Date()).getTime());
// }

// lanzarElDia(new Date('2016-06-10 20:29'), tarea);


const floorSelected = (event) =>{
  console.log(event.target.value)
}

export function Week  () {
  return (
    <div>
      
      <center>
        <div className="filterFLoor">
          <select onChange={()=>floorSelected(event)}>
            <option value="10th floor">10th floor</option>
            <option value="9th floor">9th floor</option>
          </select>
        </div>
      </center>

      <div  >
        {day.map((element, index) => (
          <div key={element}>
            <Day day={element} number={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

