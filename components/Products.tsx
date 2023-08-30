import { products } from "@lib/constants";
import React from "react";
import ProductCard from "./cards/ProductCard";

const Products = () => {
  return (
    <div className="w-full py-5">
      <p className="uppercase font-bold  mx-10 pl-10">Sample Products At YooKatale</p>
      <div className="mx-10 p-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
