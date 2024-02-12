import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import {BlackContainer} from "../Pages/IntroPage/IntroPage";
import {Img, ImgOpacity50} from "./Layout";
import {theme} from "../Styles/theme";
import IntroPageHeader from "../Pages/IntroPage/Components/IntroPageHeader";

function Header() {
    return (
        <BlackContainer flexDirection="row" height="100vh">
            <HeaderContainer>
                <MyHeader/>
                {/* <IntroPageHeader/> */}
                <ContainerOutletMain>
                    <Outlet/>
                </ContainerOutletMain>
            </HeaderContainer>
        </BlackContainer>
    );
}

const MyHeader = () => {
    return (
        <ContainerHeader>
            <WrapperHeader>
                <DivHeader>
                <ImgOpacity50 src="img/tune_logo.png" alt="tune_logo" height = "21px"/>
                    <ImgOpacity50 src="img/user-02.png" alt="user-02" width="24px" height="24px" />
                </DivHeader>
            </WrapperHeader>
            <WrapperButton>
                <Span>요약</Span>
                <Span>커뮤니티</Span>
            </WrapperButton>
        </ContainerHeader>
    );

}

const HeaderContainer = styled.div`
    width : 390px;
`
const ContainerHeader = styled.div `
    width : 100%;
    height: 165px;
    padding : 0px 8px;


    /* background-color: red; */
    
    /* padding : 0px 20px; */
    /* margin : 0px 8px; */
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

`

const ContainerOutletMain = styled.div `
    width: 390px;
    height : 679px;

    /* background-color: yellow; */

    padding : 0px 8px;
    box-sizing: border-box;
`

const WrapperHeader = styled.div `

    width: 100%;
    height : 100px;
    /* background-color: skyblue; */
    padding : 20px 20px 15px 20px;
    box-sizing: border-box;
    

    display: flex;
    align-items: end;
`
const DivHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
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

const Span = styled.span `
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