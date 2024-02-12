import KakaoLogin from "react-kakao-login";
import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "../IntroPage/Components/IntroPageMain";

const SocialKakao = () => {
    const kakaoClientId = process.env.REACT_APP_REST_API_KEY;
    const navigate = useNavigate();

    const KakaoOnSuccess = async (data) => {
        console.log(data);
        window
            .localStorage
            .clear();
        sessionStorage.setItem("userKakaoId", data.profile.id);
        sessionStorage.setItem("kakaoAccessToken", data.response.access_token);
        const loginData = {
            // kakaoAccessToken: data.response.access_token
            email: data.profile.kakao_account.email,
            uid: data.profile.id
        };
        console.log("loginData", loginData);
        // 로그인 성공 시 SignupPage 페이지로 이동
        try {
            console.log("test", process.env.REACT_APP_URL + "/api/member/login");
            const response = await axios.post(
                process.env.REACT_APP_URL + "/api/member/login",
                loginData,
                // {withCredentials: true}  요청에 인증 정보를 포함하여 보냄
            );
            console.log("유자차 response", response);
            if (response.data.first === true) {
                console.log("Server Response:", response.data);
                navigate("/register");
            } else {
                navigate("/home");
            }
        } catch (error) {
            console.error("Error sending login data:", error);
        }
    };

    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return (<> < KakaoLogin token = {
        kakaoClientId
    }
    onSuccess = {
        KakaoOnSuccess
    }
    onFail = {
        kakaoOnFailure
    }
    render = {
        ({onClick}) => (
            <Button onClick={onClick}>
                {/* <img src={KakaoBtn} alt="KakaoBtn"/> */}
                카카오 로그인
            </Button>
        )
    } /> </>);
};

export default SocialKakao;