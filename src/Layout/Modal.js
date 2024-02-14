import styled from "styled-components";
import { P } from "./Layout";

export const Modal = ({ isOpen, closeModal, navigate, page }) => {
  return (
    <div>
      {isOpen && (
        <div>
          <BlackOverlay onClick={closeModal} />
          <DivModal>
            <P fontSize="17px" fontWeight="700">
              {page === "test"
                ? "테스트를 중단하시겠어요?"
                : "회원가입을 중단하시겠습니까?"}
            </P>
            <P fontSize="17px" fontWeight="500" textAlign="center">
              {page === "test"
                ? "지금 나가시면, 기록하신 데이터는\n저장되지 않습니다."
                : "지금 나가시면, 회원가입이\n완료되지 않습니다."}
            </P>
            <DivButtonItems>
              <Button onClick={closeModal}>취소</Button>
              <Button onClick={() => navigate("/")}>확인</Button>
            </DivButtonItems>
          </DivModal>
        </div>
      )}
    </div>
  );
};

const DivModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 297px;
  height: 203px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0px;
  box-sizing: border-box;
  z-index: 1000;
  white-space: pre-wrap;
`;

const DivButtonItems = styled.div``;

const Button = styled.button`
  width: 128px;
  height: 35px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  background-color: #dedede;
  &:hover {
    opacity: 0.5;
  }
  &:first-child {
    margin-right: 10px;
  }
`;

const BlackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
