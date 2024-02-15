import styled from "styled-components";
import { Img } from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";

function CommunityPageSearch() {
    return (
        <CommuniPageSearchContainer>
            <WrapperSearch>
                <Img src="img/search-sm.png" alt="searchIcon" width="24px" height="24px" />
                <Input placeholder="검색어를 입력해주세요."/>
            </WrapperSearch>
        </CommuniPageSearchContainer>
    );
}


const CommuniPageSearchContainer = styled.div`
    width: 100%;
    height : 49px;

    margin-bottom: 15px;
    /* background-color: yellow; */
`

const WrapperSearch = styled.div`
    width: 100%;
    height : 100%;

    display: flex;
    align-items: center;

    border-radius: 16px;
    
    background-color: #313131;

    & > Img {
        margin: 0 15px;
    }
`

const Input = styled.input`
    color : ${theme.colors.white_100};

    border : none;
    background-color: transparent;

    font-size : 16px;
    font-weight: 400;
    line-height: 24px;

    &::placeholder{
        color : #5e5e5e;
    }

    &:focus{
        outline: none;
    }

`
export default CommunityPageSearch;