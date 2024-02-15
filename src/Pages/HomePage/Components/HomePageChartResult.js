import styled from "styled-components";
import { P } from "../../../Layout/Layout";
import { constSelector } from "recoil";
import { MiniSquare, sortByMaxValue } from "./tempChartData";
import { theme } from "../../../Styles/theme";

const HomePageChartResult = (e) => {
    const data = ["가장 잦습니다.", "두 번째로 잦습니다.", "세 번째로 잦습니다."];
    const temp = [{}]
    const dataTemp = sortByMaxValue(e.lastedData);
    const topThreeSymptoms = Object.entries(dataTemp)
        .filter(([key]) => key !== 'total') // total 제외
        .sort(([, valueA], [, valueB]) => valueB - valueA) // 값에 따라 내림차순 정렬
        .slice(0, 3); // 상위 3개 항목 선택

    console.log(topThreeSymptoms);
    
    return (
        <HomePageChartResultContainer>
            <P fontSize="16px" fontWeight="500">가장 잦은 증상</P>
            <WrapperContent>
                {topThreeSymptoms.map(([symptom, value], index) => (
                    <P fontSize="16px" fontWeight="400" key={index}>
                        <StyledMiniSquare backgroundColor={getBackgroundColor(symptom)} />
                        {getSymbol(symptom)} 증상이 {value}%로 {data[index]} 
                    </P>
                ))}
            </WrapperContent>
            <MyHr/>
            <P fontSize="16px" fontWeight="400"><MiniSquare backgroundColor = "black"/>조현병 의심 정도는 {dataTemp.total}%입니다.</P>
        </HomePageChartResultContainer>
    );
}

const HomePageChartResultContainer = styled.div`
    width: 100%;
    height : 100%;
    /* background-color: yellow; */
`
const WrapperContent = styled.div`

    margin-top: 20px;
    width: 100%;
    height :80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: red; */
`

// 증상에 따라 배경색을 반환하는 함수
const getBackgroundColor = (symptom) => {
    switch (symptom) {
        case 'hallucination':
            return theme.colors.pink_100;
        case 'abnormalBehavior':
            return theme.colors.purple_100;
        case 'moody':
            return theme.colors.lemon_100;
        case 'delusion':
            return theme.colors.green_100;
        default:
            return theme.colors.gray_100; // 기본값
    }
}

// 각 증상에 따라 symbol을 반환하는 함수
const getSymbol = (symptom) => {
    switch (symptom) {
        case 'hallucination':
            return '환청/환각';
        case 'abnormalBehavior':
            return '이상 행동';
        case 'moody':
            return '감정 변화';
        case 'delusion':
            return '망상';
        default:
            return ''; // 기본값
    }
}

const StyledMiniSquare = styled(MiniSquare)`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const MyHr = styled.hr`
    margin : 15px 0px;
    border : 1px solid gray;
`

export default HomePageChartResult;