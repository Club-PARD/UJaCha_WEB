import styled from "styled-components";
import {Container} from "../../../Layout/Layout";
import {theme} from "../../../Styles/theme";
function IntroPageContent() {
    return (
        <IntroPageContentContainer>
            <WrapperTitle>
                <TitleP>{contentData.title}</TitleP>
            </WrapperTitle>
            <WrapperContent>
            {
                contentData.content.map((contents, index) => (
                    <WrapperContentItem key={index} textAlign={index === 1 ? "right" : "left"}>
                        <ContentTitle>{contents.title}</ContentTitle>
                        <ContentContent>{contents.content}</ContentContent>
                    </WrapperContentItem>
                ))
            }
            </WrapperContent>
        </IntroPageContentContainer>
    );

}

const contentData = {
    title: "조현병에 관한 진실",
    content: [
        {
            title: "01.\n조현병은 특이한\n사람만 걸린다?",
            content: "조현병의 유병률은 1%로, 이는 결코 적은 것이\n아닙니다. 많은 사람이 앓는 흔한 병이지만\n상당수가 치료를 받지 못하고 방치되어 있습니다" +
                    "."
        }, {
            title: "02.\n조현병 환자는 위험하니\n무조건 피해야 하나?",
            content: "조현병은 뇌 기능이 제대로 조율되지 않아서\n발생한 질환일 뿐입니다. 안정적으로\n치료받으면서 조절되고 있는 환자들은\n위험의 여지가 거의 " +
                    "없습니다."
        }, {
            title: "03.\n조현병은 치료가 어려운\n고질병인가?",
            content: "조현병은 주로 10대 후반부터 30대까지\n발병하는데,약물치료가 가장 중요하며,\n심리치료나 행동치료를 병행하기도 합니다.\n또한, 일찍 치료할수록 뇌 기능을 더 잘\n회복할 수 있습니다."
        }
    ]
}

const IntroPageContentContainer = styled(Container)`
    width: 100%;
    height : 833px;
    /* background-color: ${theme.colors.peach_100}; */
    background-image: url("img/section2BG.png"); // 배경 이미지 추가
    background-size: cover; // 이미지를 컨테이너에 맞게 조절
    background-position: center; // 이미지를 가운데 정렬
    border-radius : 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding : 15px;
    box-sizing: border-box;
    margin-bottom: 8px;
`
const WrapperTitle = styled.div `
    width: 100%;
    height : auto;
    /* background-color: wheat; */

    margin : 40px 0px;
`

const TitleP = styled.p `
    font-size: 28px;
    font-weight: 500;
    line-height: 39.2px;
`

const WrapperContent = styled.div `
    width: 100%;
    height : auto;

    /* background-color: white; */
`
const ContentTitle = styled.p `  
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;

    margin-bottom: 18px;
    white-space: pre-line;
`
const ContentContent = styled.p `
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    white-space: pre-line;
`

const WrapperContentItem = styled.div `
    width: 100%;
    height: auto;

    /* background-color: green; */

    margin-bottom: 50px;
    &:last-child{
        margin-bottom: 0;
    }

    text-align: ${props => props.textAlign};
`;
export default IntroPageContent;