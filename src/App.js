import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import CompleteTree from "./Components/CompleteTree/CompleteTree";
import AxiosTree from "./Components/AxiosTree/AxiosTree";
import Nav from "./Components/Nav/Nav";

function App() {

  const [list, setList] = useState([]);
  const [axiosList, setAxiosList] = useState([]);

  useEffect(() => {
    axios.get("https://wp.x10.mx/laravel8/api/showCompleteTree").then((res) => {
      setList(res.data.entries);
    });
    axios.get("https://wp.x10.mx/laravel8/api/fetchAxiosTreeNode/").then((res) => {
      setAxiosList(res.data.childs);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CompleteTree data={list} />} />
          <Route path="/second" element={<AxiosTree data={axiosList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
