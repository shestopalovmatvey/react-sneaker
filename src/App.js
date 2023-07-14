import React, { useState, useMemo } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import { useData } from "./useData";

function App() {
  const [inputValue, setInputValue] = useState("");
  const { items } = useData();

  const filteredItems = useMemo(() => {
    return items.filter((elem) =>
    elem.title.toLowerCase().includes(inputValue.toLowerCase()))
  }, [items, inputValue])

  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home setInputValue={setInputValue} filteredItems={filteredItems} />
          }
          exact
        />

        <Route path="/favorites" element={<Favorites />} exact />
      </Routes>
    </div>
  );
}

export default App;
