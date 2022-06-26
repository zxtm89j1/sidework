import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar id="navbar" />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LogIn" element={<LogIn/>}/> 
            <Route path="/SignUp" element={<SignUp />}/> 
          </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
