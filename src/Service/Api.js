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

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversations/add`, data);
  } catch (error) {
    console.log("error while calling setConversation api", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation api", error.message);
  }
};
