import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AllBeers from './Pages/AllBeers/AllBeers'
import OneBeer from './Pages/OneBeer/OneBeer';
import RandomBeer from './Pages/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllBeers' element={<AllBeers/>} />   
        {/* // <Route path='/RandomBeers' element={<RandomBeers/>} />    */}
        <Route path='/beer/:id' element={<OneBeer />} />   
        <Route path='/RandomBeer' element={<RandomBeer />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
