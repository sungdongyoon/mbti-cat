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
  background-color: powderblue;
`;

const Wrap = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 50px;
  position: relative;
`;


function App() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return (
    <Container>
      <Wrap>
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
