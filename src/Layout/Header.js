import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import { BlackContainer } from "../Pages/IntroPage/IntroPage";
import { Img, ImgOpacity50 } from "./Layout";
import { theme } from "../Styles/theme";

function Header() {
    return (
        <BlackContainer flexDirection = "column">
            <MyHeader/>
            <ContainerOutletMain>
                <Outlet/>
            </ContainerOutletMain>
        </BlackContainer>
    );
}

const MyHeader = () => {
    return (
        <ContainerHeader>
            <WrapperHeader>
                <ImgOpacity50 src="img/tune_logo.png" alt="tune_logo" />
                <ImgOpacity50 src="img/user-02.png" alt ="user-02" width = "24px" height= "24px"/>
            </WrapperHeader>
            <WrapperButton>
                <Span>요약</Span>
                <Span>커뮤니티</Span>
            </WrapperButton>
        </ContainerHeader>
    );

}

const ContainerHeader = styled.div`
    width : 390px;
    height: 165px;

    /* background-color: red; */

    padding : 0px 25px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

`

const ContainerOutletMain = styled.div`
    width: 390px;
    height : 679px;

    /* background-color: yellow; */

    padding : 0px 20px;
    box-sizing: border-box;
`

const WrapperHeader = styled.div`

    width: 100%;
    height : 24px;
    /* background-color: skyblue; */

    margin-top: 55px;
    margin-bottom: 35px;

    display: flex;
    justify-content: space-between;
`

const WrapperButton = styled.div`
    width: 100%;
    height : 38px;
    /* background-color: green; */

    font-size: 32px;
`

const Span = styled.span`
    color : #727272;

    &:first-child{
        color : ${theme.colors.lemon_100};
        margin-right: 20px;
    }

    &:hover{
        opacity: 50%;
    }
`
export default Header;