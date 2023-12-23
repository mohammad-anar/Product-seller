import { GrDocumentConfig } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 7000,
    amt: 2290,
  },
  {
    name: "Jun",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "July",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Aug",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 6000,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4900,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4500,
    amt: 2100,
  },
];

const DashboardHome = () => {
  return (
    <div>
    {/* top stats  */}
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
      {/* sale chart  */}
      <div>
        <div className="flex items-center justify-between my-12 px-12">
          <h3 className="text-xl text-white font-semibold">Total Sales</h3>
          <div className="flex items-center border px-4 rounded-xl">
            <FaCalendarDays size={20} className="text-white" />
            <select className="select select-bordered bg-transparent border-0 text-white text-base">
              <option>Last year</option>
              <option>Last 6 month</option>
              <option>Last 3 month</option>
              <option selected>Last month</option>
              <option>Last Week</option>
              <option>Yesterday</option>
              <option>Today</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca10"
              fill="#82cb99"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* recent Orders  */}
    </div>
  );
};

export default DashboardHome;
