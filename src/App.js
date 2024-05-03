import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Components/Cards';
import Home from './Container/Home';
import Team from './Container/Team';
import About from './Container/About';
import Contact from './Container/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import React,{useState} from 'react';

function App() {
  const [state,setState]=useState("Home");
  var container
  if(state==="Tea"){
    container=<Team/>
  }else if(state==="Abou"){
    container=<About/>
  }else if(state==="Contact"){
    container=<Contact/>
  }else{
    container=<Home/>
  }
  return (
    <div className="App">
      <Header setState={setState}/>
      {container}
      <Cards/>
      <Footer setState={setState}/>
    </div>
  );
}

export default App;
