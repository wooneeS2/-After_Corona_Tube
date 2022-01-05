import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import ChartPage from "./pages/ChartPage";
import SearchPage from "./pages/SearchPage";
import HeaderComponents from "./components/base/Header";
import { LogInPage } from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

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
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
