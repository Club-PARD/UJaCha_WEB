import styled from "styled-components";
import { Img, MyLink } from "../../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteUser } from "../../../Api/test";
import { Modal } from "../../../Layout/Modal";

function Account() {
  const navigate = useNavigate();
  const jwtToken = sessionStorage.getItem("jwtToken");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!jwtToken) {
      // alert("로그인해주세요.");
      // navigate("/");
    }
  }, [jwtToken, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // handler delete User
  const handleClick = async () => {
    await openModal();
    const response = await deleteUser();
  };
  return (
    <Container>
      <Title>계정</Title>
      <ButtonContainer
        onClick={() => {
          window.sessionStorage.clear();
          navigate("/");
        }}
      >
        <p>로그아웃</p>
        <Img
          src="img/chevron-right.png"
          alt="chevron-right"
          width="18px"
          height="18px"
        />
      </ButtonContainer>
      <ButtonContainer onClick={handleClick}>
        <p>탈퇴하기</p>
        <Img
          src="img/chevron-right.png"
          alt="chevron-right"
          width="18px"
          height="18px"
        />
      </ButtonContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        navigate={navigate}
        page="account"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 358px;
  height: 144px;
  flex-shrink: 0;
  border-radius: 20px;
  background: RGBA(254, 254, 254, 0.1);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: var(--White, #fefefe);
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  width: 326px;
  text-align: left;
  margin: 16px 0px 24px 0px;
`;

const ButtonContainer = styled.button`
  width: 326px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  p {
    color: RGBA(254, 254, 254, 0.5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 112.5% */
  }
`;

export default Account;
