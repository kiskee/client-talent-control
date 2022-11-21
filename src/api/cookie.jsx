import { ENV } from "../utils";

export class Cookie {

    baseApi = ENV.BASE_API;


    async getCookieApi() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.COOKIES}/getcookie/637519ee0c65d37d4dec447c`;
            const params = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result
        } catch (error) {
            throw error;
        }

    }



    async updateCookieApi(information) {

        console.log(information)
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.COOKIES}/637519ee0c65d37d4dec447c`;
            const params = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(information)
            };
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            console.log(result)
        } catch (error) {
            throw error
        }
    }

}
