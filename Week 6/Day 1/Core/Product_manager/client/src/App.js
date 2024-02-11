import './App.css';
import {Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
        <Routes>
          <Route path="/products" element={<Create />} />
          <Route path="/products/all" element={<Main />} />
          <Route path="/products/:id" element={<OneProduct />} />
        </Routes>
      
    </div>
  );
}

export default App;
