import { useState, useEffect } from "react";
import styled from "styled-components";
import { Img } from "../../../Layout/Layout";

function ResultHeader() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 300);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, []); // 초기 렌더링 시 한 번만 실행

  return (
    <HeaderContainer style={{ opacity: showHeader ? 1 : 0 }}>
      <Img src="img/x-close.png" alt="x-close" width="30px" height="30px" />
      <Img src="img/logo.png" alt="logo" width="56.384px" height="21.388px" />
      <Img src="img/user-02.png" alt="user-02" width="24px" height="24px" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 342px;
  top: 6%;
  position: absolute;
  transition: opacity 1.5s ease;
`;

export default ResultHeader;