import styled from "styled-components";
import {Container} from "../../../Layout/Layout";
import CommunityPageDetailHeader from "./Components/CommunityPageDetailHeader";
import CommunityPageDetailTitle from "./Components/CommunityPageDetailTitle";
import CommunityPageDetailContent from "./Components/CommunityPageDetailContent";
import CommunityPageDetailComment from "./Components/CommunityPageDetailComment";
import { useState } from "react";
import { tempCommunityData } from "../Components/tempCommunityData";
import { useLocation } from "react-router-dom";

function CommunityPageDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const postNumber = searchParams.get("postid");
    var CommentCount = tempCommunityData[postNumber].comment.length;

    

    const [comments, setComments] = useState(tempCommunityData[postNumber].comment);
    const postData = tempCommunityData[postNumber];
    return (
        <CommunityPageDetailContainer>
            <CommunityPageDetailHeader />
            <CommunityPageDetailTitle postData={postData} />
            <CommunityPageDetailContent postData={postData} /> 
            <CommunityPageDetailComment CommentCount={CommentCount} comments={comments} setComments={setComments} />
        </CommunityPageDetailContainer>
    );
}

const CommunityPageDetailContainer = styled(Container)`
    height: auto;

    padding: 0px 8px;
    box-sizing: border-box;
    
    /* background-color: red; */

    display: flex;
    flex-direction: column;
`;

export default CommunityPageDetail;