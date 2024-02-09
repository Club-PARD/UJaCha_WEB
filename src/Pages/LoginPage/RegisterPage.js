import styled from "styled-components";
import {ButtonOpacity50, Container, ImgOpacity50} from "../../Layout/Layout";

function RegisterPage() {
    return (
        <RegisterPageContainer>
            <WrapperHeader>
                <ImgOpacity50 src = "img/x-close.png" alt = "x-close" width = "30px" height = "30px"/>
                <HeaderTitle>회원가입</HeaderTitle>
            </WrapperHeader>
            <WrapperInput>
                <DivInput>
                    <InputTitle>닉네임 (필수)</InputTitle>
                    <Input type="text" placeholder="닉네임을 입력해주세요."></Input>
                </DivInput>
                <DivInput>
                    <InputTitle>진단 대상자 나이 (필수)</InputTitle>
                    <Input type="text" placeholder="나이를 입력해주세요. "></Input>
                </DivInput>
            </WrapperInput>
            <WrapperButton>회원가입</WrapperButton>
        </RegisterPageContainer>
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

const WrapperButton = styled(ButtonOpacity50) `
    width: 100%;
    height : 56px;

    border-radius: 16px;
    border : none;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 10px;
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
`

const WrapperHeader = styled.div`
    width: 100%;
    height : auto;

    /* background-color: red; */
    
    display: flex;
    align-items: center;

    margin-top: 30px;
`

const HeaderTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 23.87px;
    margin-left: 110px;
`
export default RegisterPage;