import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import { Header, HomePage, CardTypePage } from "./components";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/types/:type" element={<CardTypePage />}/>
      </Routes>
    </div>
  );
}

export default App;
