import styled from "styled-components";
import { deleteUser } from "../Api/test";

export const Modal = ({isOpen, closeModal, navigate, page, exception}) => {
    const jwtToken = sessionStorage.getItem("jwtToken");

    const handleAccount = () => {
        const response =  deleteUser();
        window.sessionStorage.clear();
        navigate("/");
    };

  const { main, sub } = handleGetMessage(page);
  const buttonMessage = handleGetButtonMessage(page)

    const handleButtonClick = () => {
        if (exception === "/mypage") {
            navigate(exception);
        } else {
            switch (page) {
                case "test":
                    jwtToken
                        ? navigate("/home")
                        : navigate("/");
                    break;
                case "home":
                    navigate("/test");
                    break;
                case "account":
                    handleAccount();
                    break;
                case "register":
                    navigate("/");
                    break;
                default:
                    navigate("/home");
            }
        }
    };

    return (
        <div>
            {
                isOpen && (
                    <div>
                        <BlackOverlay onClick={closeModal}/>
                        <DivModal>
                            <MainText>{main}</MainText>
                            <SubText>{sub}</SubText>
                            <DivButtonItems>
                                <Button onClick={closeModal}>취소</Button>
                                <Button style={{color: "#FF2946"}} onClick={handleButtonClick}>
                                    {buttonMessage}
                                </Button>
                            </DivButtonItems>
                        </DivModal>
                    </div>
                )
            }
        </div>
    );
};

// page에 따라 다른 main, sub 메세지를 반환하는 핸들러
const handleGetMessage = (page) => {
    switch (page) {
        case "test":
            return {main: "테스트를 중단하시겠어요?", sub: "지금 나가시면, 기록하신 데이터는\n저장되지 않습니다."};
        case "home":
            return {main: "오늘 이미 기록이 존재합니다.", sub: "증상을 새로 추가하면\n오늘의 이전 기록은 사라집니다."};
        case "account":
            return {main: "정말 탈퇴하시겠습니까?", sub: "이전의 기록했던\n모든 기록이 사라집니다."};
        default:
            return {main: "회원가입을 중단하시겠습니까?", sub: "지금 나가시면, 회원가입이\n완료되지 않습니다."};
    }
};

const handleGetButtonMessage = (page) => {
  switch (page) {
    case "home":
      return "추가하기"
    case "account":
      return "탈퇴하기"
    default:
      return "나가기"
  }
}

const DivModal = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 326px;
    height: 265px;
    background-color: ${ ({
    theme}) => theme.colors.white_100};
    color: ${ ({
        theme}) => theme.colors.black_100};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    z-index: 1000;
    border-radius: 24px;
    white-space: pre-wrap;
`;

        const MainText = styled.p `
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 48px 0px 24px 0px;
`;

        const SubText = styled.p `
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin-bottom: 30px;
`;

        const DivButtonItems = styled.div ``;

        const Button = styled.button `
    width: 128px;
    height: 35px;
    border: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    background-color: ${ ({
            theme}) => theme.colors.white_100};
    color: ${ ({
                theme}) => theme.colors.black_100};
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    &:first-child {
        margin-right: 10px;
    }
`;

                const BlackOverlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;
