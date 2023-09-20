import './App.css';
import Navbar from './Components/Homepage/Navbar';
import Homepage from './Screens/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Homepage/Login&SignUp/Login';
import Signup from './Components/Homepage/Login&SignUp/Singup';
import Forgot from './Components/Homepage/Login&SignUp/Forgot';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
