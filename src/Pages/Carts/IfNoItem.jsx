
import { FaAnglesLeft } from 'react-icons/fa6';
import { TbShoppingCartX } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const IfNoItem = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-[80vh] space-y-5">
          <h2 className="text-4xl font-medium ">Shopping Cart is empty</h2>
          <TbShoppingCartX size={120} className="text-red-600" />
          <p className="text-lg text-gray-700">
            There is no item in your shopping cart
          </p>
          <h4
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-base cursor-pointer"
          >
            <FaAnglesLeft className="text-red-600" /> Continue shopping
          </h4>
        </div>
    );
};

export default IfNoItem;