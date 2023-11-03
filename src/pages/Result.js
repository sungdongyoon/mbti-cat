import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { getCatImg } from '../util';
import axios from 'axios';
import Button from '../Components/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MBTIResult = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 30px;
  }
`;

const ResultText = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const CatImage = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ReusltCat = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CatName = styled.h1`
  font-size: 30px;
  color: #B0926A;
`;

const ResultDesc = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Result = () => {
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
      <MBTIResult>
        <span>
          MBTI 결과 : {resultData.mbti} 
        </span>
      </MBTIResult>
      <ResultText>
        <span>
          나와 찰떡궁합인 고양이는?
        </span>
      </ResultText>
      <CatImage>
        <img src={getCatImg(resultData.id)}/>
      </CatImage>
      <ReusltCat>
        <CatName>
          {resultData.name}
        </CatName>
        <ResultDesc>
          {resultData.desc}
        </ResultDesc>
      </ReusltCat>
      <Button onClickGo={'/'} value={"테스트 다시하기"} bgColor={"orange"} color={"white"}/>
    </Container>
  )
}

export default Result;
