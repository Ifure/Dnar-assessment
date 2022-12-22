import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import IndexPage from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
            element={<IndexPage/>}
          />
        </Routes>
    </div>
  );
}

export default App;
