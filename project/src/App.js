import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/startPage";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import HeaderComponents from "./components/base/headerComponent";
import FooterComponents from "./components/base/footerComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>

      <FooterComponents />
    </div>
  );
}

export default App;
