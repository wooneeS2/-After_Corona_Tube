import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../design/header.css";
import axios from "axios";

// 헤더의 메뉴버튼
export function MenuBtn({ isLogin, userName, LogOut }) {
  const [visible, setVisible] = useState(false);
  const menuList = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "Chart",
      path: "chart",
    },
    {
      label: "Search",
      path: "search",
    },
    {
      label: "LogIn",
      path: "sign-in",
    },
    {
      label: "LogOut",
      path: "",
    },
  ];

  // 메뉴버튼 on/off
  const turnMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="navigator">
        {isLogin === true ? (
          <span className="user-login-info">{userName}님</span>
        ) : (
          <div></div>
        )}
        <button
          id="menu-btn"
          onClick={() => {
            turnMenu();
          }}
        >
          <AiOutlineMenu size={25} />
        </button>
        {/* 로그인이 되어있으면 로그아웃 버튼이보이고, 안되어있으면 로그인 버튼이 보임 */}
        {visible && (
          <div className="menu">
            {(isLogin === true
              ? menuList.filter(x => x.label !== "LogIn")
              : menuList.filter(x => x.label !== "LogOut")
            ).map(x => {
              return (
                <div key={x.id} id="drop-menu">
                  <Link
                    to={`/${x.path}`}
                    onClick={
                      x.label === "LogOut"
                        ? () => {
                            LogOut();
                          }
                        : () => {
                            window.scrollTo(0, 0);
                          }
                    }
                  >
                    {x.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

// 헤더
export function HeaderComponents({ isLogin, userName, LogOut }) {
  return (
    <header>
      <div id="headers" fixed="top">
        <Link to="/" id="service-name">
          애코튜브
        </Link>

        <MenuBtn userName={userName} LogOut={LogOut} isLogin={isLogin} />
      </div>
    </header>
  );
}

export default HeaderComponents;
