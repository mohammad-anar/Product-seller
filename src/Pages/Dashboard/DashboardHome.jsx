import { GrDocumentConfig } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
const DashboardHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/*  4*/}
        <div className="stat bg-warning rounded-xl">
          <div className="stat-figure text-white">
            <GiReceiveMoney size={50} />
          </div>
          <div className="stat-title text-white text-base font-bold">
            Daily Sale
          </div>
          <div className="stat-value text-white">$1873</div>
          <div className="stat-desc ml-2 text-sm mt-2">
            <p className="px-2 rounded-xl text-white bg-gray-300 inline-block">
              63%
            </p>
          </div>
        </div>
        {/* 1 */}
        <div className="stat bg-error rounded-xl">
          <div className="stat-figure text-white">
            <GrDocumentConfig size={50} />
          </div>
          <div className="stat-title text-white text-base font-bold">
            Total Products
          </div>
          <div className="stat-value text-white">1500</div>
          <div className="stat-desc ml-2 text-sm mt-2">
            <p className="px-2 rounded-xl text-white bg-gray-300 inline-block">
              63%
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="stat bg-success rounded-xl">
          <div className="stat-figure text-white">
            <MdOutlineShoppingCart size={50} />
          </div>
          <div className="stat-title text-white text-base font-bold">
            Total orders
          </div>
          <div className="stat-value text-white">$4563</div>
          <div className="stat-desc ml-2 text-sm mt-2">
            <p className="px-2 rounded-xl text-white bg-gray-300 inline-block">
              -33%
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="stat bg-purple-600 rounded-xl">
          <div className="stat-figure text-white">
            <FaUsersCog size={50} />
          </div>
          <div className="stat-title text-white text-base font-bold">
            Total Users
          </div>
          <div className="stat-value text-white">563</div>
          <div className="stat-desc ml-2 text-sm mt-2">
            <p className="px-2 rounded-xl text-white bg-gray-300 inline-block">
              +21%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
