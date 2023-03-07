import axios from "axios";
const URL = "http://localhost:4000/users/";

const getUserId = (id) => axios.get(`${URL}${id}`);

const newUser = (data) => axios.post(URL, data);

export { getUserId, newUser };
