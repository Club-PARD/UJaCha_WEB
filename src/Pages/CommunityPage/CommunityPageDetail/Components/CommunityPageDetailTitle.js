import styled from "styled-components";
import { theme } from "../../../../Styles/theme";
import { Img } from "../../../../Layout/Layout";

function CommunityPageDetailTitle({ postData }) {
    return (
        <CommunityPageDetailTitleContainer>
            <WrapperTitle>
                <SpanTitle>{postData.title}</SpanTitle>
                <Img src = "img/dots-vertical.png" alt = "dots-vertical icon" width = "24px" height = "24px"/>
            </WrapperTitle>
            <WrapperWritterTimestamp>
                <SpanWritterTimestamp>
                    {postData.writter} | {postData.timestamp}
                </SpanWritterTimestamp>
            </WrapperWritterTimestamp>
        </CommunityPageDetailTitleContainer>
    );

}

const CommunityPageDetailTitleContainer = styled.div`
    width: 100%;
    height : 117px;
    /* background-color: yellow; */

    margin-bottom: 8px;
    padding : 24px;
    box-sizing: border-box;

    border-radius: 24px;

    background-color: ${theme.colors.white_100};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WrapperTitle = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SpanTitle = styled.span`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
`

const WrapperWritterTimestamp = styled.div`
    width: 100%;

`

const SpanWritterTimestamp = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color : #868686;
`
export default CommunityPageDetailTitle;