import KakaoLogin from "react-kakao-login";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../IntroPage/Components/IntroPageMain";
import { useRecoilState } from "recoil";
import { userInfo } from "../../Atoms";
const SocialKakao = ({ page }) => {
  const [userInfoData, setUserInfoData] = useRecoilState(userInfo); // 유저 정보 저장

  const kakaoClientId = process.env.REACT_APP_REST_API_KEY;
  const navigate = useNavigate();

  const KakaoOnSuccess = async (data) => {
    console.log(data);
    await window.localStorage.clear();
    await sessionStorage.setItem("userKakaoId", data.profile.id);
    await sessionStorage.setItem(
      "kakaoAccessToken",
      data.response.access_token
    );
    const loginData = {
      // kakaoAccessToken: data.response.access_token
      email: data.profile.kakao_account.email,
      uid: data.profile.id,
    };
    console.log("loginData", loginData);

    // 로그인 성공 시 SignupPage 페이지로 이동
    try {
      console.log("test", process.env.REACT_APP_URL + "/api/member/login");
      const response = await axios.post(
        process.env.REACT_APP_URL + "/api/member/login",
        loginData
        // {withCredentials: true}  요청에 인증 정보를 포함하여 보냄
      );
      console.log("유자차 response", response);
      if (response.data.first === true) {
        console.log("Server Response:", response.data);
        const tempUserInfoData = {
          nickname: "",
          reliableName: "",
          childAge: null,
          uid: data.profile.id,
        };
        setUserInfoData(tempUserInfoData);
        navigate("/register");
      } else {
        console.log(response.data.token);
        sessionStorage.setItem("jwtToken", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error sending login data:", error);
    }
  };

  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      {" "}
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={KakaoOnSuccess}
        onFail={kakaoOnFailure}
        render={({ onClick }) =>
          page === "result" ? (
            <Button
              onClick={onClick}
              backgroundcolor="black"
              color="white"
              margintop="57px"
            >
              카카오 로그인
            </Button>
          ) : (
            <Button onClick={onClick} backgroundcolor="transparent">
              {/* <img src={KakaoBtn} alt="KakaoBtn"/> */}
              카카오 로그인
            </Button>
          )
        }
      />{" "}
    </div>
  );
};

export default SocialKakao;
