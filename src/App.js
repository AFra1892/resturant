import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Navbar/>
        <Header/>
      </div>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
