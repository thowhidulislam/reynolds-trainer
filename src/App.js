import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import SignUp from './Pages/LogIn/SignUP/SignUp';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
