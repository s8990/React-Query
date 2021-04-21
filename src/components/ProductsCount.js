import React from "react";
import { useAllProducts } from "../hooks";

const ProductsCount = () => {
  const { data, isLoading } = useAllProducts();

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  return <p>Total Products: {isLoading ? "loading..." : data.length}</p>;
};

export default ProductsCount;
