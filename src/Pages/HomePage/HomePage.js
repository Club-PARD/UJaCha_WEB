import {useRecoilValue} from "recoil";
import {userInfo} from "../../Atoms";
import styled from "styled-components";
import {theme} from "../../Styles/theme";

function HomePage() {
    const userInfoData = useRecoilValue(userInfo);
    return (
        <HomePageContainer>
            <HomePageWrapper height="225px" backgroundColor="white"></HomePageWrapper>
            <HomePageWrapper height="215px" backgroundColor={theme.colors.peach_100}></HomePageWrapper>
            <Button height="56px" backgroundColor={theme.colors.purple_100}>오늘의 증상 추가하기</Button>
            <Button height="56px" backgroundColor="white">기록 공유하기</Button>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div `
    width: 100%;
    height : 100%;
    /* background-color: white; */
`

const HomePageWrapper = styled.div `
    width: 100%;
    height : ${props => props.height};
    background-color: ${props => props.backgroundColor};

    border-radius: 20px;

    margin-bottom: 15px;
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
`

export default HomePage;