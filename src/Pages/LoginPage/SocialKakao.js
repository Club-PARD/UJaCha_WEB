import styled from "styled-components";

export const SocialKakao = () =>
{
    const Rest_api_key = process.env.REACT_APP_REST_API_KEY; //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>

    <KakaoLoginButton color="black" onClick={handleLogin}>카카오 로그인</KakaoLoginButton>
    </>
    )
}

const KakaoLoginButton = styled.button`
    width : 342px;
    height : 56px;

    background: none;
    color: ${props => props.color};

    border : none;
    border-radius: 16px;
    font-size: 20px;
    border : 1px solid black;
    box-sizing: border-box;

    &:hover{
        background-color: gray;
        border : none;
        color : white;
    }
`;
export default SocialKakao