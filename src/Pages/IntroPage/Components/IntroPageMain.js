import styled from "styled-components";
import {Container, Img, P} from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";
import SocialKakao from "../../LoginPage/SocialKakao";

// 바로가기
// Container - Main 영역 Container
// Div - Content(글 / 버튼)
// Div - Content 중 문단을 묶는 Div
// Component - Content로 쓰이는 문단의 스타일
// Component - Content 중 Button으로 사용하는 스타일

function IntroPageMain() {
    return (
        <IntroPageMainContainer>
            {/* Content 영역 */}
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

            {/* Button 영역 */}
            <DivContent height="120px">
                <ButtonItems/>
            </DivContent>
        </IntroPageMainContainer>
    );
}

// Container - Main 영역 Container
const IntroPageMainContainer = styled(Container)`
    width: 100%;
    height : 660px;
    background-color: ${theme.colors.purple_100};

    border-radius: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding : 15px;
    box-sizing: border-box;

    margin-bottom: 8px;
`

// Div - Content(글 / 버튼)
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

// Div - Content 중 문단을 묶는 Div
const DivContentP = styled.div `
    line-height: 30px;

    height : 210px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

// Component - Content로 쓰이는 문단의 스타일
const ContentP = styled(P)`
    font-size: 20px;
`
// Component - Content 중 Button으로 사용하는 스타일
const Button = styled.button `
    width : 342px;
    height : 56px;

    background-color: ${props => props.backgroundcolor};
    color: ${props => props.color};

    border : none;
    border-radius: 16px;
    font-size: 20px;
    border : 1px solid black;
    box-sizing: border-box;

    &:first-child {
        margin-bottom: 10px;
    }
`;


export const ButtonItems = () => {
    return (
        <div>
            <Button backgroundcolor="black" color="white">테스트 시작</Button>
            <SocialKakao/>
        </div>
    );
}
export default IntroPageMain;