import './App.css';
import Homepage from './Components/HomePage/Screens/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/HomePage/Screens/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
