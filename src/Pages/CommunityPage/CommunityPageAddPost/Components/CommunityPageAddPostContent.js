import styled from "styled-components";
import { ButtonOpacity50, MyLink } from "../../../../Layout/Layout";

function CommunityPageAddPostContent() {
    return (
        <CommunityPageAddPostContentContainer>
            기록 추가하기 페이지<br />
            (업데이트 예정입니다.)
            <MyLink to = "/home"><button style={{ width: "", height : "35px", marginTop : "20px"}}>home으로 이동하기</button></MyLink>
        </CommunityPageAddPostContentContainer>
    );
}

const CommunityPageAddPostContentContainer = styled.div`
    width: 100%;
    height: 600px;

    border-radius: 24px;
    background-color: white;
    
    padding : 20px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;
`;

export default CommunityPageAddPostContent;