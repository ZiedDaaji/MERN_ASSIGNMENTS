import './App.css';
import {Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import Editproduct from './components/Editproduct';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/products" element={<Main />} />
          <Route path="/products/:id" element={<OneProduct />} />
          <Route path="/products/edit/:id" element={<Editproduct />} />
        </Routes>
      
    </div>
  );
}

export default App;
