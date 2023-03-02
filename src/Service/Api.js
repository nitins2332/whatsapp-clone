import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("error from addUser", error.message);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${url}/users`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error while calling getUsers api", error.message);
  }
};
