import { json } from "react-router-dom";
import { ENV } from "../utils";

export class ListDate {
    baseApi = ENV.BASE_API;

    async getListuserForDate(day, floor, shedule, type) {

      



        let info = {
            "date": "11/21/2022",
            "type": "work"
        }

        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/dayuserlist`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: day,
                    type: type,
                    floor:floor.match(/\d+/).pop()
                })
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            console.log('RES')
            console.log(result);
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
}
