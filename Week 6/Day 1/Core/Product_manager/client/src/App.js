import './App.css';
import {Route, Routes} from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
        <Routes>
          <Route path="/products" element={<Create />} />
        </Routes>
      
    </div>
  );
}

export default App;
