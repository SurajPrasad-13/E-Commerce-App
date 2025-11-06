import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 1590,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 1250,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 1250,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-22 object-cover mr-4 rounded"
              />
              <div className="">
                <h3>{product.name} </h3>
                <p className="text-sm text-gray-500">
                  size:{product.size} | color: {product.color}{" "}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-3 py-1 text-left font-medium">
                    -
                  </button>
                  <span className="mx-4"> {product.quantity} </span>
                  <button className="border rounded px-3 py-1 text-left font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <p>₹ {product.price.toLocaleString()} </p>
              <button>
                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContents;
