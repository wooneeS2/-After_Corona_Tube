import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/startPage";
import ChartPage from "./pages/ChartPage";
import SearchPage from "./pages/SearchPage";
import HeaderComponents from "./components/base/Header";

import "./design/fonts.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/home" element={<StartPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
