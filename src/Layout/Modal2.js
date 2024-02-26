import styled from "styled-components";
import { theme } from "../Styles/theme";
import { Img} from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage } from "../Pages/LoginPage/RegisterPage";
import { getUserData, postReliableName } from "../Api/test";
import { useRecoilState } from "recoil";
import { userInfo } from "../Atoms";

export const Modal2 = ({isOpen, closeModal}) => {

    const [reliableName, setReliableName] = useState("");
    const [isExit, setIsExit] = useState(true);
    const [isExitMessage, setExitMessage] = useState(""); // 중복 에러 메시지
    const [isAblePatch, setIsAblePatch] = useState(false);
    const [isShared, setIsShared] = useState(false); // 공유 여부 상태 추가
    const [userDataRecoil, setUserDataRecoil] = useRecoilState(userInfo);
    
    const [userInfoData, setUserInfoData] = useState();
    
    // 로그인한 유저의 정보를 불러오는 로직
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData();
                if (userData) {
                    const tempUserData = { nickname: userData.data.nickname, childAge: userData.data.childAge };
                    setUserInfoData(tempUserData);
                }
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };
        
        fetchData();
    }, []);

    // 변경 여부를 판단하는 로직
    // useEffect(() => {
    //     console.log("test", userInfoData);
    // }, [userInfoData]);

    // 수정 여부를 판단하는 로직 (isAblePatch 변수가 true이면 post를 진행한다.)
    useEffect(() => {
        if (isAblePatch) {
            postReliableName(userInfoData);
            setIsAblePatch(false);
        }
    }, [isAblePatch]);

    // 공유 가능 여부를 판단하는 핸들러
    const handleCheckSharingAble = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/member/duplicate?nickname=${reliableName}`);
            setIsExit(response.data);
            setExitMessage(response.data ? "공유 가능한 닉네임입니다." : "*존재하지 않는 닉네임입니다.");

            if (response.data) {
                setUserInfoData(prevData => ({ ...prevData, reliableName }));
                setUserDataRecoil(userInfoData);
                setIsAblePatch(true);
                setReliableName("");
                setIsShared(true);
            }
        } catch (error) {
            console.error("Error sending first data:", error);
        }
    };
    // 입력창의 값 변경 시 실행되는 핸들러
    const handleInputChange = (e) => {
        setReliableName(e.target.value); // e.target.value를 새로운 reliableName으로 설정
    }
    // 성공적으로 공유가 완료되었을 때 실행되는 핸들러
    const handleSuccessSharing = () => {
        closeModal();
        setIsShared(false);
        setExitMessage("");
        window.location.reload();
    }
    // 입력 취소가 진행되었을 때 실행되는 핸들러
    const handleCancleInput = () => {
        closeModal();
        setReliableName("");
        setExitMessage(null)
    }
    return (
        <div>
            {
                isOpen && (
                        <div>
                            <BlackOverlay onClick={closeModal}/>
                            {
                                !isShared
                                ? (
                                    <DivModal width="330px" height="329px" style={{ justifyContent : "space-between" }}>
                                        <ModalTitle style={{ justifyContent : "space-between", padding : "5px 0px 0px 5px" }}>
                                            <span>닉네임 입력</span>
                                            <Img src="img/x-closeBlack.png" alt="out" width="25px" height="25px"
                                                onClick={handleCancleInput} />
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
                                        <ModalButton onClick={handleCheckSharingAble}>기록 공유하기</ModalButton>
                                    </DivModal>
                                )
                                : (
                                    <DivModal width="326px" height="305px" style={{ justifyContent: "space-between" }}  data-alignitems = "center">
                                        <ModalTitle style={{ justifyContent : "center", marginTop : "15px"}}>
                                            공유 완료!
                                        </ModalTitle>
                                        <Img src = "img/check-circle-broken.png" alt = "check image" width = "90px" height = "90px"/>
                                        <ModalButton onClick={handleSuccessSharing}>확인</ModalButton>
                                    </DivModal>
                                )
                            }
                        </div>
                    )
            }
        </div>
    );
};

const DivModal = styled.div `
    width:${props => props.width};
    height:${props => props.height};

    display: flex;
    flex-direction: column;
    align-items: ${props => props['data-alignitems'] || "start"};
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

    padding : 20px;
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
    padding-left: 5px;

`

const ModalInput = styled.input`
    width: 100%;
    height : 56px;
    box-sizing: border-box;
    border : none;
    background-color: transparent;
    border-radius: 0 !important;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 30px;

    border-bottom: 1px solid black;
    /* box-shadow: 0px 10px 0px -9px black; */
    padding-left: 5px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        color : #868686;
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
    color : ${theme.colors.black_100};

    &:hover{
        background-color: ${theme.colors.pruple_bold};
    }

    margin-bottom: 5px;
`