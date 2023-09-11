import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { getCatImg } from '../util';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MBTIResult = styled.span`
  flex: 1;
  font-size: 30px;
`;

const CatImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 50%;
  margin-bottom: 50px;
`;

const ResultText = styled.span`
  flex: 1;
  font-size: 20px;
`;

const ReusltCat = styled.span`
  flex: 1;
  font-size: 40px;
`;

const ResultDesc = styled.span`
  width: 70%;
  flex: 1;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;
`;

const TryTestBtn = styled.button`
  width: 50%;
  height: 50px;
  font-size: 20px;
  color: white;
  letter-spacing: 5px;
  border: none;
  background-color: orange;
  cursor: pointer;
`;

const Result = ({goHome}) => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get('/resultData.json')
      .then((res) => {
        setResultData(res.data.resultData.find((el) => el.mbti === mbti));
      })
      .catch((error) => {
        console.log(error);
      })
    };
    getData();
  }, []);

  console.log(resultData)
  return (
    <Container>
      <MBTIResult>MBTI 결과 : {resultData.mbti}</MBTIResult>
      <ResultText>예비 집사님과 찰떡궁합인 고양이는?</ResultText>
      <CatImage src={getCatImg(resultData.id)}/>
      <ReusltCat>{resultData.name}</ReusltCat>
      <ResultDesc>{resultData.desc}</ResultDesc>
      <TryTestBtn onClick={goHome}>테스트 다시하기</TryTestBtn>
    </Container>
  )
}

export default Result;
