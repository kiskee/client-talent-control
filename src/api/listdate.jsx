import { ENV } from "../utils";

export class ListDate {
    baseApi = ENV.BASE_API;

    async getListuserForDate() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DAY}/dayuserlist`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: '{\r\n    "date":"11/16/2022",\r\n    "type":"work"\r\n}'
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
