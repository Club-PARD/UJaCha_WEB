import { useState, useEffect } from "react";
import styled from "styled-components";
import { Img, ImgOpacity50 } from "../../../Layout/Layout";
import { useRecoilValue } from "recoil";
import { pageState, formState } from "../../../Atoms";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../Layout/Modal";

function TestHeader() {
  const navigate = useNavigate();
  const page = useRecoilValue(pageState);
  const form = useRecoilValue(formState);
  const [showHeader, setShowHeader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exceptionLink, setExceptionLink] = useState("");
  const jwt = sessionStorage.getItem("jwtToken");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1100);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, []); // 초기 렌더링 시 한 번만 실행

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMypageButton = () => {
    if (form.question1 !== 0) {
      setExceptionLink("/mypage");
      openModal();
    } else {
      navigate("/mypage");
    }
  };

  const handleCloseButton = () => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    if (form.question1 !== 0) {
      openModal();
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <HeaderContainer style={{ opacity: showHeader ? 1 : 0 }}>
        <ImgOpacity50
          src="img/x-close.png"
          alt="x-close"
          height="30px"
          onClick={handleCloseButton}
        />
        {page !== 12 ? (
          <ProgressBar>
            <progress value={page / 12} />
          </ProgressBar>
        ) : (
          <Img
            src="img/logo.png"
            alt="logo"
            width="56.384px"
            height="21.388px"
          />
        )}
        {jwt ? (
          <ImgOpacity50
            src="img/user-02.png"
            alt="user-02"
            height="24px"
            onClick={handleMypageButton}
          />
        ) : (
          <Box></Box>
        )}
      </HeaderContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        navigate={navigate}
        page="test"
        exception={exceptionLink}
      />
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 342px;
  top: 6%;
  position: absolute;
  transition: opacity 1s ease;
`;

const ProgressBar = styled.div`
  margin-left: 27px;
  margin-right: 34px;

  progress {
    width: 227px;
    height: 4px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    border-radius: 19px;
    background-color: var(--White, #fefefe);
  }
  progress::-webkit-progress-value {
    border-radius: 19px;
    background-color: var(--Lemon, #fee28d);
  }
`;

const Box = styled.div`
  width: 24px;
  height: 24px;
`;

export default TestHeader;
