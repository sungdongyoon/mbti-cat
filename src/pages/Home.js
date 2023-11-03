import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import cat from '../img/cat.png';

const Content = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ContentImage = styled.img`
  width: 50%;
`;

const ContentTitle = styled.h1`
  font-size: 30px;
  color: #B0926A;
  display: flex;
  align-items: center;
`;

const ContentText = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
`;

const Home = () => {
  return (
    <>
    <Content>
      <ContentImage src={cat}/>
      <ContentTitle>MBTI TEST</ContentTitle>
      <ContentText>MBTI테스트를 통해<br/>나와 맞는 고양이를 찾아봐요!</ContentText>
      <Button onClickGo={'/question'} value={"테스트 시작하기"} bgColor={"orange"} color={"white"}/>
    </Content>
    </>
  )
}

export default Home;
