import { AiOutlineMenu } from "react-icons/ai";
import "./../design/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MenuBtn() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="navigator">
        <button
          id="menu-btn"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <AiOutlineMenu size={25} />
        </button>
        {visible && (
          <div className="menu">
            <div id="drop-menu">
              <Link to="/" id="drop-menu">
                1menu
              </Link>
            </div>
            <div id="drop-menu">
              <Link to="/second" id="drop-menu">
                2menu
              </Link>
            </div>
            <div id="drop-menu">
              <Link to="/third" id="drop-menu">
                3menu
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function HeaderComponents() {
  return (
    <header>
      <div id="headers" fixed="top">
        <p id="service-name">SERVICE-LOGO</p>
        <MenuBtn />
      </div>
    </header>
  );
}

export function FooterComponents() {
  return (
    <div>
      <footer>footer</footer>
    </div>
  );
}

export default HeaderComponents;
