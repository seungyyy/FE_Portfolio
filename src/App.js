import GlobalStyle from './GlobalStyle';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Header from './components/layouts/Header';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
