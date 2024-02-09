import styled from "styled-components";
import {Container, Img, P} from "../../../Layout/Layout";

function IntroPageMain() {

    return (
        <IntroPageMainContainer>
            <DivContent margin="55px 0px 70px 0px" height="375px">
                <Img
                    src="img/onePercent.png"
                    width="167px"
                    height="130px"
                    alt="1 percent logo"/>
                <DivContentP>
                    <ContentP>100명 중 1명은<br/>
                        <strong>조현병</strong>이라는 사실,<br/>알고 계셨나요?</ContentP>
                    <ContentP>초기에 발견할수록<br/>치료가 수월한 조현병<br/>지금부터 예방해봐요!</ContentP>
                </DivContentP>
            </DivContent>
            <DivContent height="120px">
                <Button backgroundColor="black" color="white">테스트 시작</Button>
                <Button backgroundColor="transparent" color="black">카카오 로그인</Button>
            </DivContent>
        </IntroPageMainContainer>
    );
}

const IntroPageMainContainer = styled(Container)`
    width: 100%;
    height : 660px;
    background-color: #B9B9D7;

    border-radius: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding : 15px;
    box-sizing: border-box;

    margin-bottom: 8px;
`

const ContentP = styled(P)`
    font-size: 20px;
`

const Button = styled.button `
    width : 342px;
    height : 56px;

    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};

    border : none;
    border-radius: 16px;
    font-size: 20px;
    border : 1px solid black;
    box-sizing: border-box;
`;

const DivContent = styled.div `
    width: 100%;
    height : ${props => props.height || "auto"};
    /* background-color: yellow; */

    display: flex;
    flex-direction: column;
    align-items: center;
    margin : ${props => props.margin};
    justify-content: space-between;

`;

const DivContentP = styled.div `
    line-height: 30px;

    height : 210px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default IntroPageMain;