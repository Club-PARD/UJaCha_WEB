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
    console.log(jwtToken);
    const response = await instance.post("/api/test", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("post error");
  }
};

export const deleteUser = async () => {
  try {
    const jwtToken = sessionStorage.getItem("jwtToken");
    console.log(jwtToken);
    const response = await instance.delete("/api/member/delete", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("delete error:", error);
  }
};

export const getUserData = async () => {
  try {
    const jwtToken = sessionStorage.getItem("jwtToken");
    console.log(jwtToken);
    const response = await instance.get("/api/member", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.log("get error", error);
  }
};

export const postReliableName = async (data) => {
  try {
    const jwtToken = sessionStorage.getItem("jwtToken");
    const response = await instance.patch("/api/member/update", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("post error", error);
  }
};
