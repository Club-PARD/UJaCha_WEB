import { useState, useEffect } from "react";
import styled from "styled-components";
import { Img, ImgOpacity50 } from "../../../Layout/Layout";
import { useNavigate } from "react-router-dom";

function ResultHeader() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 300);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, []); // 초기 렌더링 시 한 번만 실행

  const handleCloseButton = () => {
    if (sessionStorage.getItem("jwtToken")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderContainer style={{ opacity: showHeader ? 1 : 0 }}>
      <ImgOpacity50
        src="img/x-close.png"
        alt="x-close"
        height="30px"
        onClick={handleCloseButton}
      />
      <Img src="img/logo.png" alt="logo" width="56.384px" height="21.388px" />
      <ImgOpacity50 src="img/user-02.png" alt="user-02" height="24px" />
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
