import  React, {useState}  from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import FormCompany from './component/FormCompany'
import Footer from './component/Footer'
import bg from './Background.png'
import Header from './component/Header'




function App() {


  return (
    <>
  <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center',
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat' }}>

  <Header />
   
    <Router>
      <Routes>
      <Route path="/" element = { < FormCompany /> } /> 
      </Routes>
    
    </Router>
   
  </div>
 
    </>
    
 
  );
}


export default App;
