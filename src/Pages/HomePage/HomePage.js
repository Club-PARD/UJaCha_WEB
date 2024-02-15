import {useRecoilValue} from "recoil";
import {userInfo} from "../../Atoms";
import styled from "styled-components";
import {theme} from "../../Styles/theme";
import {useEffect, useState} from "react";
import {BlackContainer} from "../IntroPage/IntroPage";
import HomePageChart from "./Components/HomePageChart";
import HomePageChartResult from "./Components/HomePageChartResult";
import {MiniSquare, getLatestData, tempChartData} from "./Components/tempChartData";
import { Link } from "react-router-dom";

function HomePage() {
    const userInfoData = useRecoilValue(userInfo);
    const latest7Data = getLatestData(tempChartData);
    console.log("latest7Data", latest7Data);

    useEffect(() => {
        // console.log("userInfoData", userInfoData); console.log("tempChartData",
        // tempChartData);

    })
    return (
        <HomePageContainer>
            <HomePageWrapper height="225px" backgroundColor="white">
                <LegendDiv/>
                <HomePageChart tempChartData={latest7Data}/>
            </HomePageWrapper>
            <HomePageWrapper height="215px" backgroundColor={theme.colors.peach_100}>
                <HomePageChartResult lastedData={latest7Data[6]} />
            </HomePageWrapper>
            <Link to = "/test"><Button height="56px" backgroundColor={theme.colors.purple_100}>오늘의 증상 추가하기</Button></Link>
            <Button height="56px" backgroundColor="white">기록 공유하기</Button>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div `
    width: 100%;
    height : auto;
    /* background-color: white; */
`

const HomePageWrapper = styled.div `
    width: 100%;
    height : ${props => props.height};
    background-color: ${props => props.backgroundColor};

    border-radius: 20px;

    margin-bottom: 15px;
    padding : 20px 30px;
    box-sizing: border-box;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    flex-direction: column;
`

const Button = styled.button `
    width: 100%;
    height : ${props => props.height};
    background-color: ${props => props.backgroundColor};

    border-radius: 20px;

    margin-bottom: 15px;

    border : none;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    &:hover{
        background-color: #8280FF;
    }
`

const LegendDiv = () => {
    const LegendDivContainer = styled.div `
        width: 100%;
        height : 50px;
        /* background-color: yellow; */
        margin-bottom: 10px;
    `
    const Row = styled.div `
        display: flex;
        justify-content: end;
        &:first-child {
            margin-bottom: 12px;
        }
    `


    const Item = styled.div `
    display: flex;
    align-items: center;
    margin-right: 15px;

    font-size: 15px;
    line-height: 14px;
    font-weight: 400;
    `
    return (
        <LegendDivContainer>
            <Row>
                <Item><MiniSquare backgroundColor={theme.colors.green_100} /> 망상</Item>
                <Item><MiniSquare backgroundColor={theme.colors.pink_100} /> 환각/환청</Item>
                <Item><MiniSquare backgroundColor={theme.colors.purple_100}/> 이상 행동</Item>
            </Row>
            <Row>

                <Item><MiniSquare backgroundColor={theme.colors.lemon_100} /> 감정 변화</Item>
                <Item><MiniSquare backgroundColor={theme.colors.black_100}/> 의심 정도</Item>
            </Row>
        </LegendDivContainer>
    );
}
export default HomePage;