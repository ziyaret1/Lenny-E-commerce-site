import React from "react";
import "../Main-Catalog/main.scss";
import { GrCatalog } from "react-icons/gr";
import lamp from "../../../assets/images/Hay_Lampe.png";
import main_img from "../../../assets/images/main_head_image.png";

const Main = () => {
  return (
    <section className="main_section">
      <img className="main-image" src={main_img} alt="" />
      <div className="main_backg_text">
        <h1>
        Xoş Gəldiniz!
        </h1>
        <p>Sevginizi tamamlayacaq cehizləri bizdən seçin!</p>
        <div className="cat_btns">
        <button className="main_btn">Cehizini tamamla</button>
        <button className="compan_btn">Kompaniyalar</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
