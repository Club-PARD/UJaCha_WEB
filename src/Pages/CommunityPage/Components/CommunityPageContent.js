import styled, { css } from "styled-components";
import { tempCommunityData } from "./tempCommunityData";
import { theme } from "../../../Styles/theme";
import { Div100per49px, Img, MyLink, P } from "../../../Layout/Layout";
import { useState } from "react";

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }
}

function CommunityPageContent() {
    const [sortBy, setSortBy] = useState("최신순"); // 현재 선택된 정렬 기준 상태

    const handleSortBy = (value) => {
        setSortBy(value);
    };

    return (
        <CommuniPageContentContainer>
            <WrapperButton>
                <Button data-isactive={sortBy === "최신순"} onClick={() => handleSortBy("최신순")}>
                    최신순
                </Button>
                <Button data-isactive={sortBy === "인기순"} onClick={() => handleSortBy("인기순")}>
                    인기순
                </Button>
            </WrapperButton>
            <WrapperContent>
                <MyLink to="/communityaddpost">
                    <WrapperAddPost>
                        <Span>새 글을 작성해주세요.</Span>
                        <Img src = "img/pencil-02.png" alt = "add Post Icon" width = "21px" height = "21px"/>
                    </WrapperAddPost>
                </MyLink>
                {
                    tempCommunityData.map((data, index) => (
                        <MyLink to={`/communitydetail?postid=${index}`} key={index}>
                            <PostItem>
                                <PostTitle>{data.title}</PostTitle>
                                <PostContent>{truncateText(data.content, 67)}</PostContent>
                                <PostBottom>
                                    <PostTimestamp>{data.timestamp}</PostTimestamp>
                                    <P>&nbsp;|&nbsp;</P>
                                    <PostWritter>{data.writter}</PostWritter>
                                </PostBottom>
                            </PostItem>
                        </MyLink>
                    ))
                }
            </WrapperContent>
        </CommuniPageContentContainer>
    );
}

const CommuniPageContentContainer = styled.div`
    width: 100%;
    height: auto;
    
`;

const WrapperButton = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    /* background-color: yellow; */

    margin-bottom: 15px;
`;

const Button = styled.button`
    width : 80px;
    height: 40px;

    border: none;
    border-radius: 16px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    &:first-child {
        margin-right: 10px;
    }

    border : 1px solid #9b9b9b;
    background-color: transparent;
    color :  #9b9b9b;
    ${(props) =>
        props['data-isactive'] &&
        css`
            border : none;
            background-color: ${theme.colors.white_100};
            color: ${theme.colors.black_100};
        `}
`;

const WrapperContent = styled.div`
    width: 100%;
    height : 500px;
    overflow-y: auto;
    margin-bottom: 100px;
    
`

const WrapperAddPost = styled(Div100per49px)`
    width: 100%;
    height : 49px;
    background-color: yellow;
    margin-bottom : 15px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 0px 20px;

    border-radius: 16px;
    background-color: #DCDCEB;
`

const Span = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color : ${theme.colors.purple_light};
`
const PostItem = styled.div`
    width: 100%;
    height: 158px;

    margin-bottom :  15px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${theme.colors.white_100};

    &:hover{
        opacity: 90%;

    }

`;

const PostTitle = styled(P)`
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
`;

const PostContent = styled(P)`
    height : 42px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #868686;
`;

const PostBottom = styled.div`
    width: 100%;
    height: auto;

    display: flex;

    color: #868686;

    & > p {
        font-size: 12px;
        font-weight: 500;
        line-height: 24px;
    }
`;

const PostTimestamp = styled(P)``;

const PostWritter = styled(P)``;

export default CommunityPageContent;
