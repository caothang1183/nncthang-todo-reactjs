const axios = require("axios").default;
let BASE_DOMAIN = "https://nncthang-api.herokuapp.com";
let BASE_URL = `${BASE_DOMAIN}/api`;
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;
