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
    /* height: auto; */
    height: 600px;

    padding: 0px 8px;
    box-sizing: border-box;
    
    /* background-color: red; */

    display: flex;
    flex-direction: column;
`

export default CommunityPageAddPost;