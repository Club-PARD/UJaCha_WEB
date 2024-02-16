import {Outlet, useNavigate} from "react-router-dom";
import styled, { css } from "styled-components";
import {BlackContainer, ImgOpacity50, MyLink} from "./Layout";
import {theme} from "../Styles/theme";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


// [ 바로가기 ]
// Container : Header
// Wrapper : Outlet 영역
// Container : MyHeader
// Wrapper : MyHeader 영역
// Div : Header Item
// Wrapper : Button
// Component : MenuItem (요약 / 커뮤니티)

function Header() {
    const location = useLocation();
    
    return (
        <BlackContainer flexDirection="row" height="100vh" mobileHeight="auto" desktopHeight="100vh">
            <HeaderContainer>
                <MyHeader location={location}/>
                {/* <IntroPageHeader/> */}
                <WrapperOutletMain>
                    <Outlet/>
                </WrapperOutletMain>
            </HeaderContainer>
        </BlackContainer>
    );
}

// Component : Header
const MyHeader = ({ location }) => {
    const navigate = useNavigate();
    const isActive = (path) => location.pathname === path;
    
    const jwtToken = sessionStorage.getItem("jwtToken");
    useEffect(() => {
        if (!jwtToken) {
            // alert("로그인해주세요");
            // navigate("/");
        }
    }, [jwtToken, navigate]);
    return (
        <ContainerMyHeader>
            {/* 로고/이미지 영역 */}
            <WrapperMyHeader>
                <DivHeader>
                    <MyLink to = {jwtToken ? "/home" : "/"}><ImgOpacity50 src="img/tune_logo.png" alt="tune_logo" height = "21px"/></MyLink>
                    <MyLink to = "/mypage"><ImgOpacity50 src="img/user-02.png" alt="user-02" width="24px" height="24px" /></MyLink>
                </DivHeader>
            </WrapperMyHeader>

            {/* Link 영역 */}
            <WrapperButton>
                <MenuItem to="/home" isActive={isActive("/home")}>요약</MenuItem>
                <MenuItem to="/community" isActive={isActive("/community") || isActive("/communitydetail")}>커뮤니티</MenuItem>
            </WrapperButton>
        </ContainerMyHeader>
    );
}

// Container : Header
const HeaderContainer = styled.div`
    width : 390px;
`

// Wrapper : Outlet 영역
const WrapperOutletMain = styled.div `
    width: 390px;
    height : auto;
    box-sizing: border-box;
    padding : 0px 8px;
    
    /* background-color: yellow; */
`

// Container : MyHeader
const ContainerMyHeader = styled.div `
    width : 100%;
    height: 165px;

    display: flex;
    flex-direction: column;
    
    padding : 0px 8px;
    box-sizing: border-box;
    
    /* background-color: red; */
`

// Wrapper : MyHeader 영역
const WrapperMyHeader = styled.div `
    width: 100%;
    height : 100px;

    display: flex;
    align-items: end;

    padding : 20px 20px 15px 20px;
    box-sizing: border-box;
    
    /* background-color: skyblue; */
`

// Div : Header Item
const DivHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// Wrapper : Button
const WrapperButton = styled.div `
    /* width: 100%; */
    height : 65px;
    /* background-color: green; */

    margin: 0px 20px;
    box-sizing: border-box;

    font-size: 32px;

    display: flex;
    align-items: center;
`

// Component : MenuItem (요약 / 커뮤니티)
const MenuItem = styled(MyLink)`
    color: ${props => props.isActive ? theme.colors.lemon_100 : '#727272'};
    &:hover {
        opacity: 50%;
    }

    &:first-child {
        margin-right: 15px;
    }
`;
export default Header;