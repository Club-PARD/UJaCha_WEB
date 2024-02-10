import React, { useEffect, useState } from "react";
import styled from "styled-components";

function TestPageAnswer() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (hoverColor, index) => {
    setSelectedButtonIndex(index);
  };

  useEffect(() => {
    console.log("selectedButtonIndex", selectedButtonIndex);
  }, [selectedButtonIndex]);

  return (
    <TestPageAnswerContainer>
      <WrapperRoundButton>
        <WrapperRoundButtonItems
          selectedButtonIndex={selectedButtonIndex}
          handleButtonClick={handleButtonClick}
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
  border-radius: 50%;
  border: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) =>
    props.selected ? props.hoverColor : "transparent"};

  &:hover {
    background-color: ${(props) => props.hoverColor};
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
  color: "#000000";
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
        selected={props.selectedButtonIndex === index}
        onFocus={() => setFocusedIndex(index)}
        onBlur={() => setFocusedIndex(null)}
      />
    );
  });
};
export default TestPageAnswer;
