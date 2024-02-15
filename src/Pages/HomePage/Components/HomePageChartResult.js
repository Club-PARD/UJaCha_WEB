import styled from "styled-components";
import {P} from "../../../Layout/Layout";
import {MiniSquare, sortByMaxValue} from "./tempChartData";
import {theme} from "../../../Styles/theme";

// [ 바로가기 ]
// Container : HomePageChartResult
// Wrapper : Content (잦은 증상 순위)
// handler 증상에 따라 배경색을 반환하는 함수
// handler : 각 증상에 따라 symbol을 반환하는 함수
// Component : 증상 별 사각형 색상 아이콘
// Component : styled Hr 태그

const HomePageChartResult = (e) => {

    // 변수 선언
    const resultEndString = ["가장 잦습니다.", "두 번째로 잦습니다.", "세 번째로 잦습니다."];
    const sortedLastedData = sortByMaxValue(e.lastedData);
    const topThreeLastedData = Object
        .entries(sortedLastedData)
        .filter(([key]) => key !== 'total') // total 제외
        .sort(([
            , valueA
        ], [, valueB]) => valueB - valueA) // 값에 따라 내림차순 정렬
        .slice(0, 3); // 상위 3개 항목 선택

    // console.log(topThreeLastedData);  가장 높은 수치의 세 가지 '증상' 출력

    return (
        <HomePageChartResultContainer>
            {/* 가장 잦은 증상*/}
            <P fontSize="16px" fontWeight="500">가장 잦은 증상</P>

            {/* 잦은 증상 순위*/}
            <WrapperContent>
                {
                    topThreeLastedData.map(([symptom, value], index) => (
                        <P fontSize="14px" fontWeight="400" key={index}>
                            <StyledMiniSquare backgroundColor={getBackgroundColor(symptom)} />
                            {getSymbol(symptom)} 증상이 평균 {value}%로 {resultEndString[index]}
                            {/* ex) 감정 변화 증상이 평균 65%로 가장 잦습니다. */}
                        </P>
                    ))
                }
            </WrapperContent>

            <MyHr />
            
            <P fontSize="14px" fontWeight="400"><MiniSquare backgroundColor="black"/>조현병 의심 정도는 {sortedLastedData.total}%입니다.</P>
        </HomePageChartResultContainer>
    );
}

// Container : HomePageChartResult
const HomePageChartResultContainer = styled.div `
    width: 100%;
    height : 100%;

    /* background-color: yellow; */
`
// Wrapper : Content (잦은 증상 순위)
const WrapperContent = styled.div `
    width: 100%;
    height :80px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 20px;
    /* background-color: red; */
`

// handler 증상에 따라 배경색을 반환하는 함수
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

// handler : 각 증상에 따라 symbol을 반환하는 함수
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

// Component : 증상 별 사각형 색상 아이콘
const StyledMiniSquare = styled(MiniSquare)`
    background-color: ${props => props.backgroundColor};
`;

// Component : styled Hr 태그
const MyHr = styled.hr `
    margin : 15px 0px;
    
    border : none;
    border-bottom : 1px solid gray;
`

export default HomePageChartResult;