/**
 *
 * @param {Date} dateEnter  Base date with which it calculates the days of the week in force according to the date received
 * @returns Returns an array with each of the dates of the day of the week.
 */

export function calculateDays(dateEnter) {
    let date = FirstMondayoftheWeek(dateEnter);

    let days = [];

    for (let i = 1; i < 6; i++) {
        let tempdate = date.getTime() + 86400000 * i;
        days.push(new Date(tempdate));
    }
    return days;
}

/**
 *
 * @param {date} dateEnter Date from to calculate the first day of the week
 * @returns Return on the first Monday of the week
 */
export function FirstMondayoftheWeek(dateEnter) {
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
}

/**
 * 
 * @author DiamondStalker carlos.moreno
 * @returns Returns a Boolean:
 *  - #### True  :  It's Friday
 *  - #### False  :  It's not Friday
 */
export function itisFriday() {
    let tmpDate = new Date().getUTCDay();
    return tmpDate == 5 ? true : false
}



export function mostrar(){
    console.log('click en un contenedor')
}