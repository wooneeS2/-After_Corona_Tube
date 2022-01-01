import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../design/header.css";

// 헤더의 메뉴버튼
export function MenuBtn() {
  const [visible, setVisible] = useState(false);
  const menuList = ["home", "chart", "search"];
  // 메뉴버튼 on/off
  const turnMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="navigator">
        <button
          id="menu-btn"
          onClick={() => {
            turnMenu();
          }}
        >
          <AiOutlineMenu size={25} />
        </button>
        {visible && (
          <div className="menu">
            {menuList.map(x => {
              return (
                <div id="drop-menu">
                  <Link to={`/${x}`}>{x}</Link>
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
export function HeaderComponents() {
  return (
    <header>
      <div id="headers" fixed="top">
        <Link to="/home" id="service-name">
          SERVICE-LOGO
        </Link>
        <MenuBtn />
      </div>
    </header>
  );
}

export default HeaderComponents;
