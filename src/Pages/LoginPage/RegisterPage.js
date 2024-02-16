import styled from "styled-components";
import { BlackContainer, Container, ImgOpacity50 } from "../../Layout/Layout";
import { theme } from "../../Styles/theme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../../Atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "../../Layout/Modal";
import { Button } from "../IntroPage/Components/IntroPageMain";
import { useRecoilValue } from "recoil";
import { formState } from "../../Atoms";
import { postData } from "../../Api/test";

function RegisterPage() {
  const [userInfoData, setUserInfoData] = useRecoilState(userInfo); // 유저 정보 저장
  const [tempUserInfo, setTempUserInfo] = useState(userInfoData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(true);
  const [duplicateErrorMessage, setDuplicateErrorMessage] = useState(""); // 중복 에러 메시지
  const form = useRecoilValue(formState);

  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isChildAgeValid, setIsChildAgeValid] = useState(false);
  const [isRegisterButtonEnabled, setIsRegisterButtonEnabled] = useState(false);

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
    // if (userInfoData.uid === "") navigate("/");
  });

  const userKakaoId = sessionStorage.getItem("userKakaoId");
  useEffect(() => {
    if (!userKakaoId) {
      // navigate("/");
    }
  }, [userKakaoId, navigate]);
  // 회원가입 버튼 활성화 여부 확인
  useEffect(() => {
    if (!isDuplicate && isChildAgeValid) {
      // 모든 입력이 유효할 때만 버튼 활성화
      setIsRegisterButtonEnabled(true);
    } else {
      setIsRegisterButtonEnabled(false);
    }
  }, [isDuplicate, isChildAgeValid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // 진단 대상자 나이가 입력되었는지 확인하여 상태 업데이트

    if (name == "childAge") {
      if (value !== "") {
        setIsChildAgeValid(true);
      } else {
        setIsChildAgeValid(false);
        setIsRegisterButtonEnabled(false);
      }
      console.log("isChildAgeValid", isChildAgeValid);
    } else if (name === "nickname") {
      if (value !== "") {
        setIsNicknameValid(true);
      } else {
        setIsNicknameValid(false);
      }
      console.log("isNicknameValid", isNicknameValid);
    }
  };

  const handleCheckDuplicate = () => {
    console.log("nickname type:", typeof tempUserInfo.nickname);
    if (tempUserInfo.nickname != "") {
      axios
        .get(
          process.env.REACT_APP_URL +
          "/api/member/duplicate?nickname=" +
          tempUserInfo.nickname
        )
        .then(function (response) {
          // HTTP GET 요청에 대한 응답을 비동기적으로 처리합니다.
          setIsDuplicate(response.data); // 중복 여부 업데이트
          console.log("responseDuplicate", response.data);
          if (response.data) {
            setDuplicateErrorMessage("이미 존재하는 닉네임입니다."); // 중복일 경우 에러 메시지 설정
          } else {
            setDuplicateErrorMessage("사용 가능한 닉네임입니다."); // 중복이 아닐 경우 에러 메시지 초기화
          }
          // 이제 response.data를 사용하여 false 값을 얻을 수 있습니다. 아래는 필요에 따라 추가적인 작업을 할 수 있습니다. 예를
          // 들어, 응답에 따라 조건부로 다른 동작을 수행할 수 있습니다.
        })
        .catch(function (error) {
          // 오류 처리
          console.error("Error sending first data : ", error);
        });
    } else {
      setDuplicateErrorMessage("닉네임을 입력해주세요.");
    }
  };

  const handleRegister = async () => {
    try {
      if (isRegisterButtonEnabled) {
        console.log("tempUserInfo", tempUserInfo);

        if (isDuplicate === false) {
          const response = await axios.post(
            process.env.REACT_APP_URL + "/api/member/first",
            tempUserInfo
          );
          console.log("post result", response);
          await console.log("jwt: ", response.data);
          sessionStorage.setItem("jwtToken", response.data);
          navigate("/home");
        } else {
          alert("중복된 이름입니다.");
        }
      } else {
        console.log("응 안돼~");
      }
    } catch (error) {
      console.error("Error sending first data : ", error);
    }

    try {
      if (form.question1 !== 0) {
        console.log(sessionStorage.getItem("jwtToken"));
        const response = postData(form);
        console.log(response.data);
      }
    } catch (error) {
      console.error("register page post error", error);
    }
  };

  return (
    <BlackContainer height="100vh">
      <RegisterPageContainer>
        <WrapperHeader>
          <ImgOpacity50
            src="img/x-close.png"
            alt="x-close"
            width="30px"
            height="30px"
            onClick={openModal}
          />
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            navigate={navigate}
            page="register"
          />
          <HeaderTitle>회원가입</HeaderTitle>
        </WrapperHeader>
        <WrapperInput>
          <DivInput>
            <InputTitle>닉네임 (필수)</InputTitle>
            <DivInputInner>
              <Input
                type="text"
                placeholder="닉네임을 입력해주세요."
                value={tempUserInfo.nickname}
                name="nickname"
                onChange={handleInputChange}
                flex="7"
              ></Input>
              <DivButton>
                <DulButton onClick={handleCheckDuplicate}>중복 확인</DulButton>
              </DivButton>
            </DivInputInner>
            {duplicateErrorMessage && (
              <ErrorMessage available={isDuplicate} paddingLeft = "10px">
                {duplicateErrorMessage}
              </ErrorMessage>
            )}
          </DivInput>
          <DivInput>
            <InputTitle>진단 대상자 나이 (필수)</InputTitle>
            <Input
              type="number"
              placeholder="나이를 입력해주세요."
              value={tempUserInfo.childAge}
              name="childAge"
              onChange={handleInputChange}
            ></Input>
          </DivInput>
        </WrapperInput>
        <WrapperButton
          onClick={handleRegister}
          isRegisterButtonEnabled={isRegisterButtonEnabled}
        >
          회원가입
        </WrapperButton>
      </RegisterPageContainer>
    </BlackContainer>
  );
}

const RegisterPageContainer = styled(Container)`
  height: 844px;

  background-color: black;
  color: white;

  padding: 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperButton = styled(Button)`
  width: 100%;
  height: 56px;

  border-radius: 16px;
  border: ${(props) =>
    props.isRegisterButtonEnabled === true ? "none" : "1px solid white"};
  color: ${(props) =>
    props.isRegisterButtonEnabled === true ? "#1e1e1e" : "white"};

  font-size: 20px;
  font-weight: 500;
  line-height: 30px;

  margin-bottom: 10px;

  background-color: ${(props) =>
    props.isRegisterButtonEnabled === true
      ? theme.colors.purple_100
      : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.isRegisterButtonEnabled === true
        ? "#8280FF"
        : theme.colors.purple_100};
    color: ${({ theme }) => theme.colors.black_100};
  }
`;

const WrapperInput = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 270px;
`;

const DivInput = styled.div`
  width: 100%;
  height: 80px;

  &:first-child {
    margin-bottom: 40px;
  }

  /* background-color: red; */
`;

const InputTitle = styled.p`
  width: 100%;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  opacity: 50%;

  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: ${(props) => props.flex};
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  background: none;
  border: none;
  /* border-bottom: 1px solid white; */

  box-shadow: 0px 10px 0px -9px white;
  padding-left: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: white;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.lemon_100};
  }
`;

const WrapperHeader = styled.div`
  width: 100%;
  height: auto;

  /* background-color: red; */

  display: flex;
  align-items: center;

  margin-top: 30px;
`;

const HeaderTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  margin-left: 110px;
`;

const DivInputInner = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  /* background-color: yellow; */
`;

const DivButton = styled.div`
  flex: 3;

  display: flex;
  justify-content: end;
  /* background-color: green; */
`;

const DulButton = styled(Button)`
  width: 82px;
  height: 44px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.purple_100};

  &:hover {
    background-color: #8280ff;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => (props.available ? props.trueColor : props.falseColor)};
  font-size: 14px;
  /* margin-top: 5px; */
  padding-left: ${props => props.paddingLeft};
`;
export default RegisterPage;
