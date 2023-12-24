import { useState } from "react";
import Shipping from "./Shipping";
import PropTypes from "prop-types";
import PaymentForm from "./PaymentForm";

const CartTotal = ({ cartTotal, products_info }) => {
  const [agree, setAgree] = useState(false);

  
  return (
    <div className="flex flex-col lg:flex-row items-start my-12 justify-around">
      <div className="max-w-xl text-center bg-gray-100 p-12 px-20 rounded-xl mx-auto lg:mx-0">
        <h2 className="text-4xl font-medium mb-8">Cart total</h2>
        <div className="w-full bg-transparent">
          <table className="border border-gray-400 w-full">
            <tr className="border border-gray-400 h-12">
              <td className="border border-gray-400 text-lg font-bold">
                SubTotal
              </td>
              <td className="border border-gray-400 text-base">
                $ {cartTotal?.toFixed(2)}
              </td>
            </tr>
            <tr className="border border-gray-400 h-12 w-1/2">
              <td className="border border-gray-400 text-lg font-bold">
                Total
              </td>
              <td className="border border-gray-400 text-base">
                $ {cartTotal?.toFixed(2)}
              </td>
            </tr>
          </table>
          <div className="flex items-center gap-4 my-5">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              className="checkbox chckbox-xs border-gray-400"
            />
            <p className="text-gray-700 text-base my-4">
              I agree with the terms and conditions
            </p>
          </div>
          <div className="text-left">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className={`${
                agree || "btn-disabled"
              }  btn btn-wide bg-red-600 text-white border-0 rounded-full hover:bg-red-500`}
            >
              Proceed to checkout
            </button>
            {/* modal  */}
            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box w-11/12 max-w-5xl bg-white">
              {/* payment form  */}
                <PaymentForm price={cartTotal?.toFixed(2)} products_info={products_info}/>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      {/* shipping  */}
      <Shipping />
    </div>
  );
};
CartTotal.propTypes = {
  cartTotal: PropTypes.number,
  products_info: PropTypes.array,
};

export default CartTotal;
