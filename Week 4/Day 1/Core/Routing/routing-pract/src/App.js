import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Inputparams from './components/Inputparams'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/Home' element={<Home /> }/>
          <Route path='/:word' element={<Inputparams /> }/>
          <Route path='/:word/:color/:bkgrd' element={<Inputparams /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
