import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, formState } from "../../../Atoms";

function TestPageButton() {
  const totalPage = 13;
  const form = useRecoilValue(formState);
  const [page, setPage] = useRecoilState(pageState);
  const [questionCount, setQuestionCount] = useState(page);

  const handlePage = (newPage) => {
    newPage === -1
      ? setPage(0)
      : newPage === totalPage
      ? setPage(newPage - 1)
      : setPage(newPage);
  };

  const handleDecreaseQuestionCount = () => {
    if (questionCount === 0) {
      alert("첫 페이지입니다.");
    } else {
      handlePage(page - 1);
      setQuestionCount(page - 1);
    }
  };

  const handleIncreaseQuestionCount = () => {
    if (questionCount === 11) {
      // alert("마지막 페이지입니다.");
      handlePage(page + 1);
    } else {
      handlePage(page + 1);
      setQuestionCount(page + 1);
    }
  };
  return (
    <TestPageButtonContainer>
      <WrapperButton>
        <ButtonBack disabled={page === 0} onClick={handleDecreaseQuestionCount}>
          이전
        </ButtonBack>
        <ButtonNext
          disabled={form[`question${page + 1}`] === 0}
          onClick={handleIncreaseQuestionCount}
        >
          다음
        </ButtonNext>
      </WrapperButton>
    </TestPageButtonContainer>
  );
}

const TestPageButtonContainer = styled.div`
  position: absolute;
  height: 60px;
  width: 100vw;
  top: 78%;
  display: flex;
  justify-content: center;
`;

const WrapperButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const ButtonBack = styled.button`
  width: 167px;
  height: 56px;
  font-size: 15px;
  background: none;
  color: ${(props) =>
    props.disabled ? "#868686" : props.theme.colors.black_100};
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled ? "#868686" : props.theme.colors.black_100};
  border-radius: 16px;
  margin-right: 8px;
`;

const ButtonNext = styled.button`
  width: 167px;
  height: 56px;
  font-size: 15px;
  background: ${(props) =>
    props.disabled ? "none" : props.theme.colors.black_100};
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled ? "#868686" : props.theme.colors.black_100};
  border-radius: 16px;
  color: ${(props) => (props.disabled ? "#868686" : "white")};
`;
export default TestPageButton;
