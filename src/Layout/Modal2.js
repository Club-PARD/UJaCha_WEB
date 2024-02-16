import styled from "styled-components";
import { theme } from "../Styles/theme";
import { Img, P } from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage } from "../Pages/LoginPage/RegisterPage";
import { getUserData, postReliableName } from "../Api/test";

export const Modal2 = ({ isOpen, closeModal, navigate, page }) => {

    const [reliableName, setReliableName] = useState("");
    const [isExit, setIsExit] = useState(true);
    const [isExitMessage, setExitMessage] = useState(""); // 중복 에러 메시지
    const [isAblePatch, setIsAblePatch] = useState(false);
    const [isShared, setIsShared] = useState(false); // 공유 여부 상태 추가
    
    const [userInfoData, setUserInfoData] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(); // 비동기 함수 호출을 await로 감쌉니다.

                if (userData) {
                    return userData.data
                }
            } catch (error) {
                console.error("Error fetching user data", error); // 오류 메시지를 콘솔에 출력합니다.
            }
        };

        fetchData().then(data => {
            if (data) {
                console.log("pangil", data);
                const tempUserData = {
                    nickname: data.nickname,
                    childAge: data.childAge,
                }
                setUserInfoData(tempUserData);

            } else {
                // alert("다시 로그인을 해주세요.");
                // navigate("/");
            }
        });
    }, []); // useEffect 의존성 배열이 비어 있으므로 한 번만 호출됩니다.
    
    const handleInputChange = (e) => {
        setReliableName(e.target.value); // e.target.value를 새로운 reliableName으로 설정
    }
    useEffect(() => {
        console.log("test", userInfoData);
    }, [userInfoData]);

    useEffect(() => {
        if (isAblePatch) {
            postReliableName(userInfoData);
            setIsAblePatch(false);
        }
    }, [isAblePatch]);

    const handlerCheckSharingAble = async () => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_URL + "/api/member/duplicate?nickname=" + reliableName
            );

            setIsExit(response.data); // 중복 여부 업데이트
            console.log("responseDuplicate", response.data);

            if (response.data) {
                setExitMessage("공유 가능한 닉네임입니다."); // 중복일 경우 에러 메시지 설정
                setUserInfoData(prevData => ({
                    ...prevData,
                    reliableName: reliableName
                }));
                setIsAblePatch(true);
                setReliableName("");
                setIsShared(true); // 공유 여부를 true로 설정
                // closeModal();
            } else {
                setExitMessage("*존재하지 않는 닉네임입니다. 다시 입력해주세요. "); // 중복이 아닐 경우 에러 메시지 초기화
            }
        } catch (error) {
            console.error("Error sending first data : ", error);
        }
    }

    return (
        <div>
            {
                page == "home"
                    ? (isOpen && (
                        <div>
                            <BlackOverlay onClick={closeModal}/>
                                {!isShared ? (
                                    <DivModal width="374px" height="329px" padding="20px" style={{ justifyContent : "space-between" }}>
                                        <ModalTitle style={{ justifyContent : "space-between" }}>
                                            <span>닉네임 입력</span>
                                            <Img src="img/x-closeBlack.png" alt="out" width="24px" height="24px" onClick={() => { closeModal(); setReliableName(""); setExitMessage(null)}}/>
                                        </ModalTitle>
                                        <ModalContent>
                                            기록을 공유하고자 하는<br />사용자의 닉네임을 입력해주세요.
                                        {isExitMessage && (
                                            <ErrorMessage 
                                                available={isExit.toString()} 
                                                style={{ color: isExit ? theme.colors.pruple_bold : theme.colors.red_100 }}>
                                                {isExitMessage}
                                            </ErrorMessage>
                                        )}
                                        </ModalContent>
                                        <ModalInput type = "text" placeholder="닉네임을 입력해주세요" value={reliableName} onChange={handleInputChange}/>
                                        <ModalButton onClick={handlerCheckSharingAble}>기록 공유하기</ModalButton>
                                    </DivModal>
                                    )
                                : (
                                    <DivModal width="374px" height="329px" padding="20px" style={{ justifyContent: "space-between" }}>
                                        <ModalTitle style={{ justifyContent : "center" }}>
                                            공유 완료
                                        </ModalTitle>
                                        <ModalButton onClick={() => {
                                            closeModal();
                                            setIsShared(false);
                                            setExitMessage("");
                                            window.location.reload();
                                        }}>확인</ModalButton>
                                    </DivModal>
                                )
                                }
                            </div>
                    ))
                    : (isOpen && (
                        <div>
                            <BlackOverlay onClick={closeModal}/>
                            <DivModal width = "297px" height = "203px">
                                <MainText>
                                    {
                                        page === "test"
                                            ? "테스트를 중단하시겠어요?"
                                            : "회원가입을 중단하시겠습니까?"
                                    }
                                </MainText>
                                <SubText>
                                    {
                                        page === "test"
                                            ? "지금 나가시면, 기록하신 데이터는\n저장되지 않습니다."
                                            : "지금 나가시면, 회원가입이\n완료되지 않습니다."
                                    }
                                </SubText>
                                <DivButtonItems>
                                    <Button onClick={closeModal}>취소</Button>
                                    <Button
                                        style={{
                                            color: "#FF2946"
                                        }}
                                        onClick={(
                                            ) => page === "test"
                                            ? navigate("/")
                                            : page === "register"
                                                ? navigate("/")
                                                : navigate("/home")}>
                                        나가기
                                    </Button>
                                </DivButtonItems>
                            </DivModal>
                        </div>
                    ))
            }
        </div>
    );
};

const DivModal = styled.div `
  width:${props => props.width};
  height:${props => props.height};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: ${props => props.justifyContent || "center"};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  color: ${ ({
    theme}) => theme.colors.black_100};
  background-color: white;

  border-radius: 24px;

  box-sizing: border-box;

  white-space: pre-wrap;

  padding : ${props => props.padding};
`;

const MainText = styled.p `
  margin: 10px 0px 18px 0px;

  font-family: "Pretendard Variable";
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubText = styled.p `
  margin-bottom: 30px;

  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

const DivButtonItems = styled.div ``;

const Button = styled.button `
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

    const BlackOverlay = styled.div `
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;


const ModalTitle = styled.div`
    width: 100%;
    height: auto;
    /* background-color: red; */

    font-size: 24px;
    font-weight: 500;
    line-height: 28px;

    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: center;
`
const ModalContent = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: orange; */

    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 20px;

`
const ModalInput = styled.input`
    width: 100%;
    height : 56px;
    box-sizing: border-box;
    border: none;
    /* background-color: yellow; */

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 30px;

    border-bottom: 1px solid black;

    /* padding-left: 20px; */

    &:focus{
        outline: none;
    }
`
const ModalButton = styled.button`
    width: 100%;
    height : 56px;
    background-color: ${theme.colors.purple_100};
    border: none;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    border-radius: 16px;

    &:hover{
        background-color: ${theme.colors.pruple_bold};
    }
`