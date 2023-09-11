import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 0 50px;
  flex: 2;
  background-color: #555;
  span {
    font-size: 25px;
    color: #fff;
  }
`;

const Questions = styled.div`
  width: 100%;
  flex: 6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const QuestionBtn = styled.button`
  width: 45%;
  height: 80%;
  border: none;
  border-radius: 10px;
  background-color: #4F709C;
  padding: 15px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;
`;

const BackBtn = styled.button`
  border: none;
  padding: 10px 30px;
  background-color: #EC53B0;
  color: white;
  cursor: pointer;
`;

const HomeBtn = styled.button`
  border: none;
  padding: 10px 30px;
  background-color: orange;
  color: white;
  cursor: pointer;
`;

const Question = ({goHome}) => {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState([]);
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {id: "EI", score: 0},
    {id: "SN", score: 0},
    {id: "TF", score: 0},
    {id: "JP", score: 0},
  ]);

  useEffect(() => {
    const getData = async () => {
      axios.get('/questionData.json')
      .then((res) => {
        setQuestionData(res.data.questionData);
      })
      .catch((error) => {
        console.log(error);
      })
    };
    getData();
  }, []);

  const nextQuestion = (no, type) => {
    const newScore = totalScore.map((el) => el.id === type ? {
      id: el.id,
      score: el.score + no} : el);
    setTotalScore(newScore);
    if(questionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce((acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), "");
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      });
    }
  };
  const prevQuestion = () => {
    if(questionNo >= 1 && questionNo <= 3) {
      if(totalScore[0].score > 0) {
        totalScore[0].score = totalScore[0].score - 1;
      }
    }
    if(questionNo >= 4 && questionNo <= 6) {
      if(totalScore[1].score > 0) {
        totalScore[1].score = totalScore[1].score - 1;
      }
    }
    if(questionNo >= 7 && questionNo <= 9) {
      if(totalScore[2].score > 0) {
        totalScore[2].score = totalScore[2].score - 1;
      }
    }
    if(questionNo >= 10 && questionNo <= 12) {
      if(totalScore[3].score > 0) {
        totalScore[3].score = totalScore[3].score - 1;
      }
    }
    if(questionNo > 0) {
      setQuestionNo(questionNo - 1);
    }
  }
  console.log(totalScore);
  return (
    <Container>
      <QuestionText>
        <span>
          {questionData[questionNo]?.id}. {questionData[questionNo]?.title}
        </span>
      </QuestionText>
      <Questions>
        <QuestionBtn onClick={() => nextQuestion(1, questionData[questionNo].type)}>{questionData[questionNo]?.answera}</QuestionBtn>
        <QuestionBtn onClick={() => nextQuestion(0, questionData[questionNo].type)}>{questionData[questionNo]?.answerb}</QuestionBtn>
      </Questions>
      <Buttons>
        <BackBtn onClick={prevQuestion}>이전 질문으로</BackBtn>
        <HomeBtn onClick={goHome}>홈으로</HomeBtn>
      </Buttons>
    </Container>
  )
}

export default Question;
