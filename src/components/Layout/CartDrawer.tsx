import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-80 sm:w-1/2 md:w-84 lg:w-100 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="size-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content with scrillable area */}
      <div className="grow p-4 overflow-y-auto ">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Component for cart Contents */}
        <CartContents />
      </div>
      
      {/* Checkout button fixed at the bottom */}
      <div className=" p-4 bg-white sticky bottom-0">
        <button className=" w-full bg-black text-white py-3 roulg font-semibold hover:bg-gray-800 transition rounded-md">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          {" "}
          Shipping, taxes, and discount codes calculated at Checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
