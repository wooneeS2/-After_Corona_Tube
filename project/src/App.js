import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/startPage";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import HeaderComponents from "./components/base/headerComponent";
import FooterComponents from "./components/base/footerComponents";
import "./design/fonts.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/home" element={<StartPage />} />
          <Route path="/chart" element={<SecondPage />} />
          <Route path="/search" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
