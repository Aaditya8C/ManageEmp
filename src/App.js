import logo from './logo.svg';
import './App.css';
import Navbar from './modules/first/navbar';
import Login from './modules/second/login';
import Register from './modules/second/regManager';
import RegisterManager from './modules/second/regManager';
import RegisterEmp from './modules/second/regEmp';
import Footer from './modules/first/footer';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
    <Footer/>
    {/* <Login/>
    <RegisterManager/>
    <RegisterEmp/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
