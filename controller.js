import fetch from 'node-fetch';

async function update(){
    try {
        const url = `https://api-talent.up.railway.app/api/v1/cookie/getcookie/637519ee0c65d37d4dec447c`
        const resp = await fetch(url, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,es-419;q=0.8,es;q=0.7",
                "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }, "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        const data = await resp.json();
        console.log(data);

    } catch (err) {
        throw err;
    }
}



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




function lanzarElDia(momento){
  console.log('lanzado',new Date());
  console.log('para ser ejecutado en',momento);
  setTimeout(update, momento.getTime()-(new Date()).getTime());
}

lanzarElDia(new Date('2022-11-16 00:36'));