import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Menu/>
    </div>
  );
}

export default App;
