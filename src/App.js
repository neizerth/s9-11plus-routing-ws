import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import { Header, HomePage, homePageLoader, CardTypePage, MainLayout } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [types, setTypes] = useState([]);
    useEffect(() => {
        const url = 'https://api.magicthegathering.io/v1/types';
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setTypes(data.types);
            });
    }, []);

  return (
    <div className="app">
      <Header types={types} />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/"  index loader={homePageLoader} element={<HomePage />} />
          <Route path="/types/:type" element={<CardTypePage />}/>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
