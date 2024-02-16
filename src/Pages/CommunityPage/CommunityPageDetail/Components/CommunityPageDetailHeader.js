import styled from "styled-components";
import {Img, MyLink} from "../../../../Layout/Layout";

function CommunityPageDetailHeader() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <CommunityPageDetailHeaderContainer>
            <Img src="img/x-close.png" alt="x-close" width="30px" height="30px" onClick={goBack}/>
        </CommunityPageDetailHeaderContainer>
    );

}

const CommunityPageDetailHeaderContainer = styled.div `
    width: 100%;
    height : 110px;
    /* background-color: orange; */

    display: flex;
    align-items: center;
    padding : 0px 15px;
    box-sizing: border-box;
`

export default CommunityPageDetailHeader;