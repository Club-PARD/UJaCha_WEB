import styled from "styled-components";
import { Img } from "../../../Layout/Layout";
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

const SearchImg = styled(Img)`
    &:hover{
        opacity: 50%;
    }
`
export default CommunityPageSearch;