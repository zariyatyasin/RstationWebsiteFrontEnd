import React from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "../../Components/Cards/ImageCard";

const ProductList = ({ product }) => {
  console.log(product);
  return (
    <div className=" grid grid-cols-1 gap-4">
      {product?.map((item) => (
        <Link to={`/product/${item._id}`} key={item._id}>
          <ImageCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
