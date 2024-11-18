import React from "react";
import "../header/header.scss";
import logo from "../../assets/logo-crop.png";
import { FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo_div">
        <img className="logo" src={logo} alt="" />
      </div>
      <form className="search_form">
        <div className="input_container">
          <input
            type="text"
            className="search_input"
            placeholder="Axtarış edin..."
          />
          <button type="submit" className="search_btn">
            Axtar
          </button>
        </div>
      </form>
      {/* <div className="nav_list">
        <ul>
          <li>Ana səhifə</li>
          <li>Kataloq</li> 
          <li>Kampaniya</li>
          <li>Bağlama</li>
          <li>Bloq</li>
        </ul>
      </div> */}

      <div className="user-login">
        <div className="user_icons">
          <FaRegUser className="userIcon" />
          <p>Şəxsi kabinet</p>
        </div>
        <div className="border_line"></div>
        <div className="fav_card_icons">
          <FcLike className="fav_icon" />
          <FaShoppingBasket className="card_icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
