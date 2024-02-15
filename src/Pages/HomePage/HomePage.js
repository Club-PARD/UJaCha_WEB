import styled from "styled-components";
import {theme} from "../../Styles/theme";
import HomePageChart from "./Components/HomePageChart";
import HomePageChartResult from "./Components/HomePageChartResult";
import {getLatestData, tempChartData} from "./Components/tempChartData";
import { Link } from "react-router-dom";
import { LeftRightPadding20px, MiniSquare, MyLink } from "../../Layout/Layout";

// [ 바로가기 ]
// Container : HomePage
// Wrapper : HomePage (Chart / Result)
// Component : Button (오늘의 증상 추가하기 / 기록 공유하기)
// Div : Legend (카테고리)

function HomePage() {
    const latestSevenData = getLatestData(tempChartData);
    const dataLength = latestSevenData.length;

    return (
        <HomePageContainer>
            {/* 카테고리 / Chart */}
            <HomePageWrapper height="225px" backgroundColor={theme.colors.white_100}>
                <LeftRightPadding20px>
                    <LegendDiv/>
                    <HomePageChart tempChartData={latestSevenData} />
                </LeftRightPadding20px>
            </HomePageWrapper>

            {/* 증상 Result */}
            <HomePageWrapper height="215px" backgroundColor={theme.colors.white_100}>
                <HomePageChartResult lastedData={latestSevenData.length !== 0 ? latestSevenData[dataLength - 1] : []} />
            </HomePageWrapper>

            {/* Buttons */}
            <MyLink to = "/test"><Button height="56px" backgroundColor={theme.colors.purple_100}>오늘의 증상 추가하기</Button></MyLink>
            <Button height="56px" backgroundColor={theme.colors.white_100}>기록 공유하기</Button>
        </HomePageContainer>
    );
}

// Container : HomePage
const HomePageContainer = styled.div `
    width: 100%;
    height : auto;
    /* background-color: white; */
`

// Wrapper : HomePage (Chart / Result)
const HomePageWrapper = styled.div `
    width: 100%;
    height : ${props => props.height};
    
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    
    margin-bottom: 15px;
    padding : 20px 30px;
    box-sizing: border-box;
    
    background-color: ${props => props.backgroundColor};
    
    border-radius: 20px;
    

`

// Component : Button (오늘의 증상 추가하기 / 기록 공유하기)
const Button = styled.button `
    width: 100%;
    height : ${props => props.height};
    
    margin-bottom: 15px;
    
    border : none;
    border-radius: 20px;    
    
    background-color: ${props => props.backgroundColor};

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    
    &:hover{
        background-color: #8280FF;
    }
`

// Div : Legend (카테고리)
const LegendDiv = () => {

    // Container : LegendDiv
    const LegendDivContainer = styled.div `
        width: 100%;
        height : 50px;
        
        padding-right: 15px;
        box-sizing: border-box;

        /* background-color: yellow; */
    `

    // Component : Row (두 개의 행)
    const Row = styled.div `
        display: flex;
        justify-content: end;

        &:first-child {
            margin-bottom: 12px;
        }
    `

    // Componet : Item (각 카테고리)
    const Item = styled.div `
        display: flex;
        align-items: center;
        
        margin-right: 15px;

        font-size: 15px;
        line-height: 14px;
        font-weight: 400;

        &:last-child {
            margin-right: 0px;
        }
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