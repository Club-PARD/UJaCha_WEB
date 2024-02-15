import styled from "styled-components";
import CommunityPageSearch from "./Components/CommunityPageSearch";
import CommunityPageContent from "./Components/CommunityPageContent";
;

function CommunityPage() {
    
    return (
        <CommunityPageContainer>
            <CommunityPageSearch />
            <CommunityPageContent/>
        </CommunityPageContainer>
    );
}

const CommunityPageContainer = styled.div`
    width : 100%;
    height : auto;

    /* background-color: yellow; */

`
export default CommunityPage;