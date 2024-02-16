import styled from "styled-components";
import { theme } from "../../../../Styles/theme";
import { tempCommunityData } from "../../Components/tempCommunityData";
import { ImgOpacity50 } from "../../../../Layout/Layout";
import { useState } from "react";

function CommunityPageDetailComment({CommentCount, comments, setComments}) {
    const [comment, setComment] = useState("");

    const handleInputChange = (e) => {
        setComment(e.target.value); // 입력한 댓글을 comment에 저장
    }

    const handleSubmit = () => {
        if (comment.trim() !== "") {
            const newComment = {
                writter: "광일 아빠",
                timestamp: "1분 전",
                comment: comment
            };
            setComments([...comments, newComment]); // 새로운 댓글을 기존 댓글에 추가
            setComment(""); // 입력 필드 초기화
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <CommunityPageDetailCommentContainer>
            <WrapperCommentCount>   
                댓글 {CommentCount}
            </WrapperCommentCount>
            <WrapperCommentContent>
                {
                        comments.map((data, index) => (
                            <CommentItem key={index}>
                                <SpanWritterTimestamp>{data.writter} | {data.timestamp}</SpanWritterTimestamp>
                                <SpanComment>{data.comment}</SpanComment>
                            </CommentItem>
                        ))
                    
                }
            </WrapperCommentContent>
            <WrapperCommentInput>
                <CommentInput type="text" placeholder="댓글 입력" value={comment} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
                <ImgOpacity50 src="img/send-01.png" alt="send icon" width="25px" height="25px" onClick={handleSubmit} />
            </WrapperCommentInput>
        </CommunityPageDetailCommentContainer>
    );
}

const CommunityPageDetailCommentContainer = styled.div`
    width: 100%;
    height : auto;
    background-color: ${theme.colors.white_100};
    margin-bottom: 8px;
    padding : 24px;
    box-sizing: border-box;
    border-radius: 24px;
`

const WrapperCommentCount = styled.div`
    width: 100%;
    height : 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
`

const WrapperCommentContent = styled.div`
    width: 100%;
    height: auto;
`

const CommentItem = styled.div`
    margin: 20px 0px;
`

const SpanWritterTimestamp = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;  
    color: #868686;
`   

const SpanComment = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;  
    color: ${theme.colors.black_100};
`

const WrapperCommentInput = styled.div`
    width: 100%;
    height : 49px;
    border-radius: 12px;
    background-color: ${theme.colors.purple_50};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 0px 15px;
    box-sizing: border-box;
`

const CommentInput = styled.input`
    width: calc(100% - 35px);
    color : ${theme.colors.black_100};
    border : none;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    box-sizing: border-box;
    &::placeholder{
        color: ${theme.colors.purple_100};
    }
    &:focus{
        outline: none;
    }
`

export default CommunityPageDetailComment;
