import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setProducts } from "../redux/actions/productActions";
import ProductComponents from "./ProductComponents";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
