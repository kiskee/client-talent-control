import { json } from "react-router-dom";
import { date } from "yup/lib/locale";
import { ENV } from "../utils";

export class ListDate {
    baseApi = ENV.BASE_API;

    async getListuserForDate(day, floor, shedule, type) {
        try {
            let tempFloor
            if (floor)
                tempFloor = floor.match(/\d+/).length > 0 ? floor.match(/\d+/).pop() : "10"

            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/dayuserlist`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: day,
                    type: type,
                    floor: tempFloor,
                    shedule: shedule
                })
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }


    async createDay(date) {

        let data = {
            "date": date,
            "userList": []
        }

        try {

            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/create`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            console.log(result);
            return result;

        } catch (error) {
            throw error;
        }

    }

    /**
     * 
     * @param {String} day Field we send to know which day we are going to update.
     * @param {Array} userList Array with updated user list
     */
    async update(day, userList) {
        let data = {
            "date": day,
            "userList": userList
        }

        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/update`
            const params = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            console.log(result);
        } catch (error) {
            throw error
        }
    }

    /**
     * 
     * @param {String} date Date we wish to search
     * @returns object with all the information of the specified day
     */
    async getDay(date) {

        let data = {
            "date": date
        }

        try {

            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/getday`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;

        } catch (error) {
            throw error;
        }

    }

}
