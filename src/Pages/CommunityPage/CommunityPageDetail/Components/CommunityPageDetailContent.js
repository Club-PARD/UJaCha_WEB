import styled from "styled-components";
import { Img } from "../../../../Layout/Layout";
import { useState } from "react";
import { theme } from "../../../../Styles/theme";

function CommunityPageDetailContent({ postData }) {

    const [isClicked, setIsClicked] = useState(false);
    const [isClickedCount, setIsClickedCount] = useState(postData.heartCount);

    const handleUpDownClickedCount = () => {
        if (isClicked) {
            setIsClickedCount(isClickedCount - 1);
            setIsClicked(false);
        }
        else {
            setIsClickedCount(isClickedCount+ 1);
            setIsClicked(true);
        }
    }
    return (
        <CommunityPageDetailContentContainer>
            <WrapperContent>
                {postData.content}
                <WrapperLikeButton>
                    <DivLikeButton>
                        <Img src={isClicked ? "img/heart-after.png" : "img/heart-before.png"} alt="heart icon" width="46px" height="46px" onClick={handleUpDownClickedCount}/>
                        <SpanHeartClickCount>좋아요 {isClickedCount}</SpanHeartClickCount>
                    </DivLikeButton>
                </WrapperLikeButton>
            </WrapperContent>
        </CommunityPageDetailContentContainer>
    );

}

const CommunityPageDetailContentContainer = styled.div`
    width: 100%;
    height : auto;
    background-color: ${theme.colors.white_100};

    margin-bottom: 8px;
    padding : 24px;
    box-sizing: border-box;

    border-radius: 24px;

`

const WrapperContent = styled.div`
    width: 100%;
    height : auto;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
`

const WrapperLikeButton = styled.div`
    width: 100%;
    height : 100px;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: end;
`
const DivLikeButton = styled.div`
    width: auto;
    height: auto;
    /* background-color: gray; */

    display: flex;
    flex-direction: column;
    align-items: center;
`

const SpanHeartClickCount = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;

    margin-top: 10px;
`
export default CommunityPageDetailContent;