import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
`;

const Button = ({value, onClickGo, bgColor, color, prevQuestion}) => {
  const navigate = useNavigate();
  const onClick = (onClickGo, prevQuestion) => {
    onClickGo ? navigate(onClickGo) : prevQuestion();
  }
  return (
    <Container onClick={() => onClick(onClickGo, prevQuestion)} bgColor={bgColor} color={color}>
      {value}
    </Container>
  )
}

export default Button;
