import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Container, P} from "../../../Layout/Layout";

function TestPageAnswer() {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    const handleButtonClick = (hoverColor, index) => {
        setSelectedButtonIndex(index);
    };

    useEffect(() => {
        console.log(selectedButtonIndex);
    }, [selectedButtonIndex]);

    return (
        <TestPageAnswerContainer>
            <WrapperRoundButton>
                <WrapperRoundButtonItems
                    selectedButtonIndex={selectedButtonIndex}
                    handleButtonClick={handleButtonClick}/>
            </WrapperRoundButton>
            <WrapperRoundButtonTitle>
                <ButtonTitle color="#FF2946">아니다</ButtonTitle>
                <ButtonTitle color="#0500FF">그렇다</ButtonTitle>
            </WrapperRoundButtonTitle>
        </TestPageAnswerContainer>
    );

}

const TestPageAnswerContainer = styled(Container)`
    height: 200px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: orange;
`;

const WrapperRoundButton = styled.div `
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RoundButton = styled.button `
    width: ${props => props.width};
    height: ${props => props.width};
    background: none;

    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.selected
    ? props.hoverColor
    : "transparent"};

    &:hover {
        background-color: ${props => props.hoverColor};
    }
`;

const WrapperRoundButtonTitle = styled.div `
    width : 90%;
    display: flex;
    justify-content: space-between;
    margin-top : 10px;
`;

const ButtonTitle = styled.p `
    font-size: 17px;
    color : ${props => props.color};
`

const WrapperRoundButtonItems = (e) => {
    return ([1, 2, 3, 4, 5].map((index) => (
        <RoundButton
            key={index}
            width={index === 3
                ? "34px"
                : (
                    index === 1 || index === 5
                        ? "47px"
                        : "41px"
                )}
            borderColor={index === 4 || index === 5
                ? "#0500FF"
                : index === 3
                    ? "#000000"
                    : "#FF2946"}
            hoverColor={index === 4 || index === 5
                ? "#8280FF50"
                : index === 3
                    ? "#00000050"
                    : "#FF294650"}
            onClick={() => e.handleButtonClick(
                index === 4 || index === 5
                    ? "#8280FF50"
                    : "#FF294650",
                index
            )}
            selected={e.selectedButtonIndex === index}/>
    )));
}
export default TestPageAnswer;
