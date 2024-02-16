import { atom } from "recoil";

// 유저 정보
export const userInfo = atom({
  key: "userInfo",
  default: {
    nickname: "",
    childAge: 0,
    uid: "",
  },
});

export const pageState = atom({
  key: "pageState",
  default: 0,
});

export const formState = atom({
  key: "formState",
  default: {
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0,
    question11: 0,
    question12: 0,
  },
});

export const resultState = atom({
  key: "resultState",
  default: {
    abnormalBehavior: 0,
    delusion: 0,
    hallucination: 0,
    moody: 0,
    total: 0,
  },
});
