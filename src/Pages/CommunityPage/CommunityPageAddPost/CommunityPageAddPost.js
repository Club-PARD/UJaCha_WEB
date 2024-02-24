import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import CommunityPageAddPostContent from "./Components/CommunityPageAddPostContent";

function CommunityPageAddPost() {
    return (
        <CommunityPageAddPostContainer>
            <CommunityPageAddPostContent/>
        </CommunityPageAddPostContainer>
    );
}

const CommunityPageAddPostContainer = styled(Container)`
    width: 374px;
    height: 600px;

    box-sizing: border-box;
    
    /* background-color: red; */

    display: flex;
    flex-direction: column;
`

export default CommunityPageAddPost;