import Image from "next/image";
import React from "react";

type TProduct = {
  id?: number;
  price?: number;
  description?: string;
  name?: string;
  image?:any;
};

const ProductCard = ({ name, price, description, image }: TProduct) => {
  return (
    <div className="p-6 shadow-xl rounded-xl">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
            <Image src={image} alt="image" width={70} height={30}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="uppercase">{name}</h6>
          <p className="text-sky-600">Price: {price}</p>
        </div>
      </div>
      <div className="py-5">
            <p>{description}</p>
        </div>
    </div>
  );
};

export default ProductCard;
