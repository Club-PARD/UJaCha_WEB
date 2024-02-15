import KakaoLogin from "react-kakao-login";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../IntroPage/Components/IntroPageMain";
import { useRecoilState } from "recoil";
import { userInfo } from "../../Atoms";
import styled from "styled-components";
import { theme } from "../../Styles/theme";

// [ 바로가기 ]
// Variables
// sessionStorage 초기화
// sessionStorage 저장
// sessionStorage에 jwtToken 저장
const SocialKakao = ({ page }) => {
  // Variables
  const [userInfoData, setUserInfoData] = useRecoilState(userInfo); // 유저 정보 저장
  const kakaoClientId = process.env.REACT_APP_REST_API_KEY;
  const navigate = useNavigate();

  // handler
  const KakaoOnSuccess = async (data) => {

    // sessionStorage 초기화
    window.localStorage.clear();
    window.sessionStorage.clear();

    // sessionStorage 저장
    sessionStorage.setItem("userKakaoId", data.profile.id);
    sessionStorage.setItem("kakaoAccessToken", data.response.access_token);
    
    // kakao login을 위한 request 정보
    const loginData = {
      // kakaoAccessToken: data.response.access_token
      email: data.profile.kakao_account.email,
      uid: data.profile.id,
    };

    // 로그인 성공 시 SignupPage 페이지로 이동
    try {

      // 로그인 시도
      const response = await axios.post(
        process.env.REACT_APP_URL + "/api/member/login",
        loginData
      );

      // 로그인 결과 출력
      console.log("kako login response", response);

      // 처음 접속 여부 판단
      if (response.data.first === true) {
        
        // uid를 recoil로 context 저장하기 위한 변수 선언
        const tempUserInfoData = {
          nickname: "",
          reliableName: "",
          childAge: null,
          uid: data.profile.id,
        };

        // 유저 정보context 저장
        setUserInfoData(tempUserInfoData);

        // 회원가입 페이지로 이동 
        navigate("/register");
      } else {
        // 처음 접속이 아닌 경우

        // sessionStorage에 jwtToken 저장
        sessionStorage.setItem("jwtToken", response.data.token);

        // 홈페이지로 이동
        navigate("/home");
      }

    } catch (error) {
      console.error("Error sending login data:", error);
    }
  };

  // 로그인 실패했을 경우
  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  // 카카오 로그인 버튼
  const KakaoLoginButton = styled(Button)`
    background-color: ${props => props.backgroundcolor || "transparent"};
    &:hover{
      background-color: ${theme.colors.pruple_bold};
    }
  `

  return (
    <div>
      {" "}
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={KakaoOnSuccess}
        onFail={kakaoOnFailure}
        render={({ onClick }) =>
          page === "result" ? (
            <KakaoLoginButton onClick={onClick} backgroundcolor="black" color="white" margintop="57px" >카카오 로그인</KakaoLoginButton>
          ) : (
            <KakaoLoginButton onClick={onClick}> 카카오 로그인</KakaoLoginButton>
          )
        }
      />{" "}
    </div>
  );
};



export default SocialKakao;
