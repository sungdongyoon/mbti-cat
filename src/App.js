import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E1C78F;
`;

const Wrap = styled.section`
  width: 400px;
  height: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  padding: 30px;
  padding-bottom: 0;
`;

const Title = styled.header`
  text-align: center;
  font-size: 20px;
  color: #B0926A;
`;

function App() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return (
    <Container>
      <Wrap>
        <Title>키티파이</Title>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/question' element={<Question goHome={goHome}/>}/>
          <Route path='/result' element={<Result goHome={goHome}/>}/>
        </Routes>
      </Wrap>
    </Container>
  );
}

export default App;
