import Header from './components/Header';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mypage from './pages/Mypage';
import Shopinfo from './pages/ShopInfo';
import Signup from './pages/SignUp';
import styled from 'styled-components';

const Body = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 6vw;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Body>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Mypage/*" element={<Mypage />} />
            <Route path="/Shopinfo/:id" element={<Shopinfo />} />
            <Route path="/Signup" element={<Signup />} />  
          </Routes>
        </Body>
      </Router>
    </>
  );
}

export default App;
