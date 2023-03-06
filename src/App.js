import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AllBeers from './Pages/AllBeers/AllBeers'
import OneBeer from './Pages/OneBeer/OneBeer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllBeers' element={<AllBeers/>} />   
        {/* // <Route path='/RandomBeers' element={<RandomBeers/>} />    */}
        <Route path='/beer/:id' element={<OneBeer />} />   

        </Routes>
      </header>
    </div>
  );
}

export default App;
