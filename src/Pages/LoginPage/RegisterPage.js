import styled from "styled-components";
import {ButtonOpacity50, Container, ImgOpacity50} from "../../Layout/Layout";
import {theme} from "../../Styles/theme";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../../Atoms";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Modal} from "../../Layout/Modal";
import { BlackContainer } from "../IntroPage/IntroPage";
import { Button } from "../IntroPage/Components/IntroPageMain";

function RegisterPage() {
    const [userInfoData, setUserInfoData] = useRecoilState(userInfo); // 유저 정보 저장
    const [tempUserInfo, setTempUserInfo] = useState(userInfoData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    // useEffect(() => {     console.log("userInfoData", userInfoData);
    // console.log("tempUserInfo", tempUserInfo); }, [tempUserInfo]); 로그인 정보가 없을 때
    // 이동
    useEffect(() => {
        if (userInfoData.uid == "") 
            navigate("/");
        }
    )

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTempUserInfo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleRegister = () => {
        try {
            console.log("tempUserInfo", tempUserInfo);

            axios
                .get(
                    process.env.REACT_APP_URL + "/api/member/duplicate?nickname=" + tempUserInfo.nickname
                )
                .then(function (response) {
                    // HTTP GET 요청에 대한 응답을 비동기적으로 처리합니다.
                    console.log("responseDuplicate", response.data);
                    // 이제 response.data를 사용하여 false 값을 얻을 수 있습니다. 아래는 필요에 따라 추가적인 작업을 할 수 있습니다. 예를
                    // 들어, 응답에 따라 조건부로 다른 동작을 수행할 수 있습니다.
                    if (response.data === false) {
                        alert("가능한 이름입니다.");
                        // const response = axios.post(     process.env.REACT_APP_URL +
                        // "/api/member/first", tempUserInfo ); console.log("post result",
                        // response.data);
                    } else {
                        alert("중복된 이름입니다.");
                    }

                })
                .catch(function (error) {
                    // 오류 처리
                    console.error("Error sending first data : ", error);
                });

        } catch (error) {
            console.error("Error sending first data : ", error);
        }
    }

    return (
        <BlackContainer height = "100vh">
            <RegisterPageContainer>
                <WrapperHeader>
                    <ImgOpacity50
                        src="img/x-close.png"
                        alt="x-close"
                        width="30px"
                        height="30px"
                        onClick={openModal}/>
                    <Modal isOpen={isModalOpen} closeModal={closeModal} navigate={navigate}/>
                    <HeaderTitle>회원가입</HeaderTitle>
                </WrapperHeader>
                <WrapperInput>
                    <DivInput>
                        <InputTitle>닉네임 (필수)</InputTitle>
                        <Input
                            type="text"
                            placeholder="닉네임을 입력해주세요."
                            value={tempUserInfo.nickname}
                            name="nickname"
                            onChange={handleInputChange}></Input>
                    </DivInput>
                    <DivInput>
                        <InputTitle>진단 대상자 나이 (필수)</InputTitle>
                        <Input
                            type="number"
                            placeholder="나이를 입력해주세요."
                            value={tempUserInfo.childAge}
                            name="childAge"
                            onChange={handleInputChange}></Input>
                    </DivInput>
                </WrapperInput>
                <WrapperButton onClick={handleRegister}>회원가입</WrapperButton>
            </RegisterPageContainer>
        </BlackContainer>
    )
}

const RegisterPageContainer = styled(Container)`
    height: 844px;
    
    background-color: black;
    color : white;

    padding : 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WrapperButton = styled(Button)`
    width: 100%;
    height : 56px;

    border-radius: 16px;
    border : none;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 10px;
    background-color: ${theme.colors.purple_100};

    &:hover{
        background-color : #8280FF;
    }
`

const WrapperInput = styled.div `
    width: 100%;
    height: auto;;

    margin-bottom: 270px;
`

const DivInput = styled.div `
    width: 100%;
    height : 80px;

    &:first-child{
        margin-bottom: 40px;
    }

    /* background-color: red; */
`

const InputTitle = styled.p `
    width: 100%;
    height: auto;
    font-size : 14px;
    font-weight: 500;
    line-height: 24px;

    opacity: 50%;

    margin-bottom: 10px;
`

const Input = styled.input `
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    background : none;
    border : none;
    border-bottom: 1px solid white;
    padding-left: 10px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color : white;

    &:focus{
        outline: none;
        border-bottom :  1px solid ${theme.colors.lemon_100};
    }
`

const WrapperHeader = styled.div `
    width: 100%;
    height : auto;

    /* background-color: red; */
    
    display: flex;
    align-items: center;

    margin-top: 30px;
`

const HeaderTitle = styled.p `
    font-size: 20px;
    font-weight: 500;
    line-height: 23.87px;
    margin-left: 110px;
`
export default RegisterPage;