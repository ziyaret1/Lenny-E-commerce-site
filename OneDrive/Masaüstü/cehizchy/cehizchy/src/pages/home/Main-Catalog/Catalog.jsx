import React from "react";
import "../Main-Catalog/catalog.scss";

const Catalog = () => {
  return (
    <section className="catalog_section">
      <div className="catalog_div">
        <ul className="cat_ul">
          <li>Mətbəx</li>
          <li>Kiçik ev alətləri</li>
          <li>Qonaq otağı</li>
          <li>Yataq otağı</li>
          <li>Dekorativ aksessuarlar</li>
          <li>Bornoz</li>
          <li>Tekstil</li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;

{
  /* <li>
Mətbəx <span className="badge">New</span>
</li> */
}

// .cat_ul{
//   list-style: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .badge {
//   background-color: #ff4d4f;
//   color: white;
//   font-size: 0.8rem;
//   padding: 2px 5px;
//   border-radius: 5px;
//   margin-left: 8px;
// }
