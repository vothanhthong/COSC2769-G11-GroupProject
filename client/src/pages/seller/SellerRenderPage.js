import React from "react";
import { useLocation } from "react-router-dom";

import SellerProductList from "./SellerProductList.js";
import SellerOrderList from "./SellerOrderList.js";
import SellerStatistic from "./SellerStatistic.js";

const SellerRenderPage = () => {
  const location = useLocation().pathname;
  return (
    <div className="col-12 col-md-9 col-lg-10 p-4">
      {location === "/sellers/productList" && <SellerProductList />}
      {location === "/sellers/orderList" && <SellerOrderList />}
      {location === "/sellers/statistic" && <SellerStatistic />}
      {location === "/sellers" && <SellerProductList />}
    </div>
  );
};

export default SellerRenderPage;
