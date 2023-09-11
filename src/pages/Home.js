import React from 'react';
import { styled } from 'styled-components';
import catImage from '../ggompang.jpeg';
import { useNavigate } from 'react-router';


const Title = styled.header`
  text-align: center;
  font-size: 40px;
  color: #BC7AF9;
  flex: 1;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 6;
`;

const ContentImage = styled.img`
  width: 50%;
  flex: 1;
`;

const ContentText = styled.span`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 20px;
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  background-color: orange;
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
`;


const Home = () => {
  const navigate = useNavigate();
  const goQuestion = () => {
    navigate('/question');
  }
  return (
    <>
    <Title>예비집사 판별기🐈</Title>
    <Content>
      <ContentImage src={catImage}/>
      <ContentText>MBTI를 기반으로 나랑 잘 맞는 고양이를 찾아보자</ContentText>
      <Button onClick={goQuestion}>테스트 시작하기</Button>
    </Content>
    </>
  )
}

export default Home;
