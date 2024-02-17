import styled from "styled-components";
import {Container, Img} from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";

// [ 바로가기 ]
// Data : Content
// Container : IntroPageContent
// Wrapper : Title
// Component : Title (조현병에 관한 진실)
// Wrapper : Content
// Wrapper : ContentItem
// Component : Content의 Title
// Component : Content

function IntroPageContent() {
    return (
        <IntroPageContentContainer>

            {/* 조현병에 관한 사실 */}
            <WrapperTitle>
                <TitleP>{contentData.title}</TitleP>
            </WrapperTitle>

            {/* Content 영역 */}
            <WrapperContent>
            {
                contentData.content.map((contents, index) => (
                    <WrapperContentItem key={index} alignItems={index === 1 ? "end" : "start"} textAlign={index ===1 ? "right" : ""}>
                        <Img src = {`img/count0`+(index+1)+`.png`} height="74.81px"/>
                        <ContentTitle>{contents.title}</ContentTitle>
                        <ContentContent>{contents.content}</ContentContent>
                    </WrapperContentItem>
                ))
            }
            </WrapperContent>
        </IntroPageContentContainer>
    );

}

// Data : Content
const contentData = {
    title: "조현병에 관한 진실",
    content: [
        {
            title: "조현병은 특이한\n사람만 걸린다?",
            content: "조현병의 유병률은 1%로, 이는 결코 적은 것이\n아닙니다. 많은 사람이 앓는 흔한 병이지만\n상당수가 치료를 받지 못하고 방치되어 있습니다" +
                    "."
        }, {
            title: "조현병 환자는 위험하니\n무조건 피해야 하나?",
            content: "조현병은 뇌 기능이 제대로 조율되지 않아서\n발생한 질환일 뿐입니다. 안정적으로\n치료받으면서 조절되고 있는 환자들은\n위험의 여지가 거의 " +
                    "없습니다."
        }, {
            title: "조현병은 치료가 어려운\n고질병인가?",
            content: "조현병은 주로 10대 후반부터 20대에 시작하여\n만성적 경과를 보입니다. 그러나 발병 초기인\n청소년기에 치료하면 안정적인 성인으로\n성장할 수 있습니다."
        }
    ]
}

// Container : IntroPageContent
const IntroPageContentContainer = styled(Container)`
    width: 100%;
    height : 1289px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 8px;
    padding : 15px;
    box-sizing: border-box;

    background-color: ${theme.colors.pink_100};
    /* background-image: url("img/section2BG.png"); // 배경 이미지 추가
    background-size: cover; // 이미지를 컨테이너에 맞게 조절
    background-position: center; // 이미지를 가운데 정렬 */
    
    border-radius : 36px;
`

// Wrapper : Title
const WrapperTitle = styled.div `
    width: 100%;
    height : auto;
    
    margin : 40px 0px;

    /* background-color: wheat; */

    text-align: center;
`

// Component : Title (조현병에 관한 진실)
const TitleP = styled.p `
    font-size: 28px;
    font-weight: 500;
    line-height: 39.2px;
`

// Wrapper : Content
const WrapperContent = styled.div `
    width: 100%;
    height : auto;

    /* background-color: white; */
`

// Wrapper : ContentItem
const WrapperContentItem = styled.div `
    width: 100%;
    height: 270px;

    margin-bottom: 150px;

    /* background-color: green; */

    &:last-child{
        margin-bottom: 0;
    }

    display: flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: ${props => props.alignItems };

    text-align: ${props => props.textAlign};

`;

// Component : Content의 Title
const ContentTitle = styled.p `  

    font-size: 20px;
    font-weight: 500;
    line-height: 28px;

    white-space: pre-line;
`

// Component : Content
const ContentContent = styled.p `
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    white-space: pre-line;
    opacity: 80%;
`

export default IntroPageContent;