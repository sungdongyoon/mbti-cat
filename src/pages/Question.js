import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import Button from '../Components/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  ul {
    li {
      font-size: 18px;
      line-height: 25px;
      text-align: center;
    }
  }
  span {
    font-size: 30px;
  }
  @media screen and (max-width: 392px) {
    ul {
      li {
        font-size: 15px;
      }
    }
  }
`;

const Questions = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const QuestionBtn = styled.button`
  width: 100%;
  height: 25%;
  border: none;
  border-radius: 10px;
  background-color: #B0926A;
  padding: 20px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
`;

const Buttons = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Question = () => {
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
        <span>Q{questionData[questionNo]?.id}</span>
        <ul>
          {questionData[questionNo]?.title.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </QuestionText>
      <Questions>
        <QuestionBtn onClick={() => nextQuestion(1, questionData[questionNo].type)}>
          <ul>
            {questionData[questionNo]?.answera.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </QuestionBtn>
        <QuestionBtn onClick={() => nextQuestion(0, questionData[questionNo].type)}>
          <ul>
            {questionData[questionNo]?.answerb.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </QuestionBtn>
      </Questions>
      <Buttons>
        <Button prevQuestion={prevQuestion} value={"이전 질문으로"} bgColor={"#ddd"} color={"#999"}/>
        <Button onClickGo={'/'} value={"홈으로"} bgColor={"#ddd"} color={"#999"}/>
      </Buttons>
    </Container>
  )
}

export default Question;
