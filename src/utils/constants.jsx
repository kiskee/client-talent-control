//const SERVER_IP = "control-api.up.railway.app";
const SERVER_IP = "server-talent.up.railway.app";

export const ENV = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    COOKIES : "cookie",
    DAY: "day",
    REFRESH_ACCESS_TOKEN: "auth/re¿fresh_access_token",
    USER_ME: "user/me",
    USER: "user",
    USERS: "users",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
    DAYS:"CalculatedDays"
  },
};