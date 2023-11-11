
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
// import Android from './pages/Android/Android';
import H2 from './pages/H2/H2';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/h2" element={<H2/>}></Route>
    </Routes>
    </>

 
  );
}

export default App;
