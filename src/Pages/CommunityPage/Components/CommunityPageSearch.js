import styled from "styled-components";
import { Div100per49px, Img } from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";
import { useState } from "react";

function CommunityPageSearch() {

    // 검색을 위한 변수 및 set함수
    const [serachInputData, setSearchInputData] = useState("");

    // 입력값 변경 핸들러
    const handleInputChange = (e) => {
        setSearchInputData(e.target.value); // e.target.value를 새로운 reliableName으로 설정
    }
    return (
        <CommuniPageSearchContainer>
            <WrapperSearch>
                <SearchImg src="img/search-sm.png" alt="searchIcon" width="24px" height="24px" />
                <SearchInput placeholder="검색어를 입력해주세요." value={serachInputData} onChange={handleInputChange}/>
            </WrapperSearch>
        </CommuniPageSearchContainer>
    );
}


const CommuniPageSearchContainer = styled.div`
    width: 100%;
    height : auto;

    margin-bottom: 15px;
    /* background-color: yellow; */
`

const WrapperSearch = styled(Div100per49px)`
    display: flex;
    align-items: center;

    background-color: #313131;
`

const SearchImg = styled(Img)`
    margin: 0 15px;
    &:hover{
        opacity: 50%;
    }
`

const SearchInput = styled.input`
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