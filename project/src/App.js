import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import StartPage from "./pages/StartPage";
import ChartPage from "./pages/ChartPage";
import SearchPage from "./pages/SearchPage";
import HeaderComponents from "./components/base/Header";
import { SignInPage } from "./pages/sign/SignInPage";
import SignUpPage from "./pages/sign/SignUpPage";
import SignUpCompletePage from "./pages/sign/SignUpCompletePage";
import "./design/fonts.css";
import axios from "axios";
const url =
  "http://elice-kdt-3rd-team-16.koreacentral.cloudapp.azure.com/api/auth/get";

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  //로그아웃
  const LogOut = () => {
    sessionStorage.removeItem("userToken");
    setIsLogin(false);
    setUserName("");
    console.log("logout");
  };

  const loadUser = async () => {
    const token = sessionStorage.getItem("userToken");
    console.log(token);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      setIsLogin(true);
      setUserName(response.data.name);
      console.log("isLogin", isLogin, "userName", userName);
    } catch (e) {
      console.log(e);
      setIsLogin(false);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponents
          userName={userName}
          LogOut={LogOut}
          isLogin={isLogin}
        />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/home" element={<StartPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/sign-in" element={<SignInPage loadUser={loadUser} />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-up/complete" element={<SignUpCompletePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
