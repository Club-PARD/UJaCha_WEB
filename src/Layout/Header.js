import {Outlet, useNavigate} from "react-router-dom";
import styled, { css } from "styled-components";
import {BlackContainer, ImgOpacity50, MyLink} from "./Layout";
import {theme} from "../Styles/theme";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


// [ 바로가기 ]
// Container : Header
// Wrapper : Outlet 영역
// Container : MainHeader
// Wrapper : MainHeader 영역
// Div : Header Item
// Wrapper : Button
// Component : MenuItem (요약 / 커뮤니티)

function Header() {
    const location = useLocation();
    
    return (
        <BlackContainer flexDirection="row" height="100vh" mobileHeight="auto" desktopHeight="100vh">
            <ContainerHeader>
                {/* Wrapper : Header */}
                <WrapperHeader location={location} />
                
                {/* Wrapper : Outlet */}
                <WrapperOutlet>
                    <Outlet/>
                </WrapperOutlet>
            </ContainerHeader>
        </BlackContainer>
    );
}

const ContainerHeader = styled.div`
    width : 390px;
`

const WrapperHeader = ({ location }) => {
    const isActive = (path) => location.pathname === path;
    const jwtToken = sessionStorage.getItem("jwtToken");

    return (
        <ContainerWrapperHeader>
            {/* 로고/이미지 영역 */}
            <WrapperRow1>
                    <MyLink to = {jwtToken ? "/home" : "/"}><ImgOpacity50 src="img/tune_logo.png" alt="tune_logo" height = "21px"/></MyLink>
                    <MyLink to = "/mypage"><ImgOpacity50 src="img/user-02.png" alt="user-02" width="24px" height="24px" /></MyLink>
            </WrapperRow1>

            {/* Link 영역 */}
            <WrapperRow2>
                <MenuItem to="/home" isActive={isActive("/home")}>요약</MenuItem>
                <MenuItem to="/community" isActive={isActive("/community") || isActive("/communitydetail")}>커뮤니티</MenuItem>
            </WrapperRow2>
        </ContainerWrapperHeader>
    );
}


const WrapperOutlet = styled.div `
    width: 390px;
    height : auto;
    box-sizing: border-box;
    padding : 0px 8px;
    
    /* background-color: yellow; */
`



// WrapperHeader Components List

const ContainerWrapperHeader = styled.div `
    width : 100%;
    height: 165px;

    display: flex;
    flex-direction: column;
    
    padding : 0px 8px;
    box-sizing: border-box;
    
    /* background-color: red; */
`

const WrapperRow1 = styled.div `
    width: 100%;
    /* height : 100px; */

    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-top: 50px;
    margin-bottom: 30px;
    padding : 0px 20px;
    box-sizing: border-box;
    
    /* background-color: skyblue; */
`

const DivHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// Wrapper : Button
const WrapperRow2 = styled.div `
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