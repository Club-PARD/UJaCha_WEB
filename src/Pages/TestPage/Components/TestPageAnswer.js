import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { formState, pageState } from "../../../Atoms";

function TestPageAnswer() {
  const [answer, setAnswer] = useState(0);
  const [page, setPage] = useRecoilState(pageState);
  const [form, setForm] = useRecoilState(formState);

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      [`question${page + 1}`]: answer,
    }));
    console.log(form);
  }, [answer]);

  useEffect(() => {
    setAnswer(0);
  }, [page]);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (hoverColor, index) => {
    setSelectedButtonIndex(index);
    setAnswer(index);
  };

  return (
    <TestPageAnswerContainer>
      <WrapperRoundButton>
        <WrapperRoundButtonItems
          selectedButtonIndex={selectedButtonIndex}
          handleButtonClick={handleButtonClick}
          form={form}
          page={page}
        />
      </WrapperRoundButton>
      <WrapperRoundButtonTitle>
        <ButtonTitle style={{ marginRight: "116.5px" }}>아니다</ButtonTitle>
        <ButtonTitle style={{ marginLeft: "116.5px" }}>그렇다</ButtonTitle>
      </WrapperRoundButtonTitle>
    </TestPageAnswerContainer>
  );
}

const TestPageAnswerContainer = styled.div`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 60%;
`;

const WrapperRoundButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background: none;
  margin: 0px 14px 0px 14px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.black_100};
  background-color: ${(props) =>
    props.selected ? props.hoverColor : "transparent"};
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
    position: relative;
    top: ${(props) =>
      props.width === "34px" ? "50%" : props.width === "41px" ? "40%" : "35%"};
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: ${(props) => (props.selected ? "inline" : "none")};
  }
`;

const WrapperRoundButtonTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonTitle = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.black_100};
`;

const WrapperRoundButtonItems = (props) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  return [1, 2, 3, 4, 5].map((index) => {
    return (
      <RoundButton
        key={index}
        width={
          index === 3 ? "34px" : index === 1 || index === 5 ? "47px" : "41px"
        }
        style={{
          backgroundColor:
            props.form[`question${props.page + 1}`] === index ||
            focusedIndex === index
              ? index === 4 || index === 5
                ? "#8280FF"
                : index === 3
                ? "rgba(254, 254, 254, 0.50)"
                : "#FF94A2"
              : "transparent",
        }}
        onClick={() =>
          props.handleButtonClick(
            index === 4 || index === 5 ? "#8280FF50" : "#FF294650",
            index
          )
        }
        selected={props.form[`question${props.page + 1}`] === index}
        onFocus={() => setFocusedIndex(index)}
        onBlur={() => setFocusedIndex(null)}
      >
        <img src={process.env.PUBLIC_URL + "/img/check.png"} />
      </RoundButton>
    );
  });
};
export default TestPageAnswer;
