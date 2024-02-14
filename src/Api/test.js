import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 10000,
});

export const postFirstData = async (data) => {
  try {
    const response = await instance.post("/api/test/first", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("post error");
  }
};

export const postData = async (data) => {
  try {
    const jwtToken = sessionStorage.getItem("jwtToken");
    const response = await instance.post("/api/test", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtToken,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("post error");
  }
};
