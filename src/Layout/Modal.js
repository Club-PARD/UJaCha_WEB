import styled from "styled-components";

export const Modal = ({ isOpen, closeModal, navigate, page }) => {
  return (
    <div>
      {isOpen && (
        <div>
          <BlackOverlay onClick={closeModal} />
          <DivModal>
            <MainText>
              {page === "test"
                ? "테스트를 중단하시겠어요?"
                : "회원가입을 중단하시겠습니까?"}
            </MainText>
            <SubText>
              {page === "test"
                ? "지금 나가시면, 기록하신 데이터는\n저장되지 않습니다."
                : "지금 나가시면, 회원가입이\n완료되지 않습니다."}
            </SubText>
            <DivButtonItems>
              <Button onClick={closeModal}>취소</Button>
              <Button
                style={{
                  color: "#FF2946",
                }}
                onClick={() =>
                  page === "test"
                    ? navigate("/")
                    : page === "register"
                    ? navigate("/")
                    : navigate("/home")
                }
              >
                나가기
              </Button>
            </DivButtonItems>
          </DivModal>
        </div>
      )}
    </div>
  );
};

const DivModal = styled.div`
  width: 297px;
  height: 203px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  color: ${({ theme }) => theme.colors.black_100};
  background-color: white;

  border-radius: 24px;

  box-sizing: border-box;

  white-space: pre-wrap;
`;

const MainText = styled.p`
  margin: 10px 0px 18px 0px;

  font-family: "Pretendard Variable";
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubText = styled.p`
  margin-bottom: 30px;

  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

const DivButtonItems = styled.div``;

const Button = styled.button`
  width: 128px;
  height: 35px;

  border: none;

  background-color: white;

  font-size: 15px;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    opacity: 0.5;
  }

  &:first-child {
    margin-right: 10px;
  }
`;

const BlackOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;
