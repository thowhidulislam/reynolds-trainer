import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import SignUp from './Pages/LogIn/SignUP/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
