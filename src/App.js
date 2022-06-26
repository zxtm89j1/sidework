import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn';
import Signin from './components/pages/Signin';
import Account from './components/pages/Account';
import Protected from './components/Protected';
import Protected2 from './components/Protected2';
import { AuthContextProvider} from './context/AuthContext';

import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
        <Navbar id="navbar" />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AboutUs" element={<AboutUs/>}/> 
            <Route path="/Categories" element={<Categories/>}/> 
            <Route path="/LogIn" element={<LogIn/>}/> 
            <Route path="/Signin" element={<Signin/>}/> 
            <Route path="/Account" element=
            {<Protected> 
              <Account /> 
            </Protected>}/> 
            <Route path="/SignUp" element={
            <Protected2> 
              <SignUp />
            </Protected2>}/> 
          </Routes>
       <Footer />
      </Router>

      </AuthContextProvider>
    </div>
  );
}

export default App;
