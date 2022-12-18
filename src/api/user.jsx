import { ENV } from "../utils";

export class User {
  baseApi = ENV.BASE_API;

  async getMe(accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw response;

      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 
   * @param {Object} data object with the information of Mail, date, floor, etc.
   * @returns Array list with filtered information
   */
  async getDayUser(data) {

    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/registerDays`

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

/**
 * 
 * @param {Object} data Information such as email and registerDays 
 * @returns MSG update
 */
  async updateListUser(data) {
    console.log('=====');
    console.log(data);

    try {
      
      const url = `${this.baseApi}/${EVN.API_ROUTES.USER}/update`;

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
