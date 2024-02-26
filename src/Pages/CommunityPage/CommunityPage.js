import styled from "styled-components";
import CommunityPageSearch from "./Components/CommunityPageSearch";
import CommunityPageContent from "./Components/CommunityPageContent";
import { OutletContainer } from "../../Layout/Layout";
function CommunityPage() {
  return (
    <CommunityPageContainer>
      <CommunityPageSearch />
      <CommunityPageContent />
    </CommunityPageContainer>
  );
}

const CommunityPageContainer = styled(OutletContainer)`
  background-color: yellow;
`;
export default CommunityPage;
