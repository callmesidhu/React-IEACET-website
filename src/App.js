import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Components/Cards';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
