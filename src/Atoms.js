import { atom } from "recoil";

// 유저 정보
export const userInfo = atom({
    key: "userInfo",
    default: {
        nickname: "",
        reliableName: "",
        childAge: 0,
        uid : "",
    },
})