import React from "react";
import "../home/home.scss";
import Header from "../../layouts/header/Header";
import Main from "./Main-Catalog/Main";
import Catalog from "./Main-Catalog/Catalog";
import ProdCard from "./Product list/ProdCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <Main />
      <ProdCard />
    </div>
  );
};

export default Home;
