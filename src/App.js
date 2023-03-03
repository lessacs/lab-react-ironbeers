import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AllBeers from './Pages/AllBeers/AllBeers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllBeers' element={<AllBeers/>} />   
        </Routes>
      </header>
    </div>
  );
}

export default App;
