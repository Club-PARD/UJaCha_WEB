import { atom } from "recoil";

// 유저 정보
export const userInfo = atom({
    key: "userInfo",
    default: {
        id: null, // 유저 id
        name: "홍길동", // 유저 name
        isLoggedIn: false, // 유저 로그인 여부
    },
})