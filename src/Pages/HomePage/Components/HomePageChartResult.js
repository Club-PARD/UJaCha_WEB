import styled from "styled-components";
import {MiniSquare, P} from "../../../Layout/Layout";
import {sortByMaxValue} from "./tempChartData";
import {theme} from "../../../Styles/theme";

// [ 바로가기 ]
// 변수 선언
// HomePageChartResultContainer : HomePageChartResult
// WrapperContent : 잦은 증상 순위
// StyledMiniSquare : 증상 별 사각형 색상 아이콘
// Hr : styled Hr 태그
// handleGetBackgroundColor : 증상에 따라 배경색을 반환하는 함수
// handleGetSymbol : 각 증상에 따라 symbol을 반환하는 함수

const HomePageChartResult = (e) => {

    // 변수 선언
    const resultEndString = ["가장 잦습니다.", "두 번째로 잦습니다.", "세 번째로 잦습니다."];
    const sortedLastedData = sortByMaxValue(e.lastedData);
    const topThreeLastedData = Object
        .entries(sortedLastedData)
        .filter(([key]) => key !== 'total') // total 제외
        .sort(([, valueA], [, valueB]) => valueB - valueA) // 값에 따라 내림차순 정렬
        .slice(0, 3); // 상위 3개 항목 선택

    // console.log(topThreeLastedData);  가장 높은 수치의 세 가지 '증상' 출력

    return (
        <ContainerHomePageChartResult>
            {/* 가장 잦은 증상 타이틀*/}
            <P fontSize="16px" fontWeight="500">가장 잦은 증상</P>

            {/* 잦은 증상 순위*/}
            <WrapperContent>
                {
                    topThreeLastedData.map(([symptom, value], index) => (
                        <P fontSize="14px" fontWeight="400" key={index}>
                            <StyledMiniSquare backgroundColor={handleGetBackgroundColor(symptom)} />
                            {handleGetSymbol(symptom)} 증상이 평균 {value}%로 {resultEndString[index]}
                            {/* ex) 감정 변화 증상이 평균 65%로 가장 잦습니다. */}
                        </P>
                    ))
                }
            </WrapperContent>

            <Hr />

            {/* 조현병 의심 정도 */}
            <P fontSize="14px" fontWeight="400"><MiniSquare backgroundColor="black"/>조현병 의심 정도는 {sortedLastedData.total}%입니다.</P>
        </ContainerHomePageChartResult>
    );
}

// HomePageChartResultContainer : HomePageChartResult
const ContainerHomePageChartResult = styled.div `
    width: 100%;
    height : 100%;

    /* background-color: yellow; */
`

// WrapperContent : 잦은 증상 순위
const WrapperContent = styled.div `
    width: 100%;
    height :80px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 20px;
    /* background-color: red; */
`

// StyledMiniSquare : 증상 별 사각형 색상 아이콘
const StyledMiniSquare = styled(MiniSquare)`
    background-color: ${props => props.backgroundColor};
`;

// Hr : styled Hr 태그
const Hr = styled.hr `
    margin : 15px 0px;
    
    border : none;
    border-bottom : 1px solid gray;
`

// handleGetBackgroundColor : 증상에 따라 배경색을 반환하는 함수
const handleGetBackgroundColor = (symptom) => {
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

// handleGetSymbol : 각 증상에 따라 symbol을 반환하는 함수
const handleGetSymbol = (symptom) => {
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

export default HomePageChartResult;