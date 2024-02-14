import { atom } from "recoil";

// 유저 정보
export const userInfo = atom({
    key: "userInfo",
    default: {
        nickname: "홍길동",
        reliableName: "",
        childAge: 100,
        uid : "",
    },
})