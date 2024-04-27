import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Components/Cards';
import Home from './Container/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
