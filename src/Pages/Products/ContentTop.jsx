import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import SortSearchBar from "./SortSearchBar";
import { useState } from "react";

const ContentTop = () => {
  const [isCard, setIsCard] = useState(true);
  return (
    <div className="flex flex-col md:flex-row border p-6 py-8 items-center justify-between space-y-5 lg:space-y-0">
      <div className="flex items-center gap-2 text-gray-700">
        <span onDoubleClick={() => setIsCard(true)}>
          <TfiLayoutGrid3Alt
            className={`${isCard ? "text-red-600" : ""}`}
            size={18}
          />
        </span>
        <span onDoubleClick={() => setIsCard(false)}>
          <TfiMenuAlt
            className={`${!isCard ? "text-red-600" : ""}`}
            size={20}
          />
        </span>
      </div>
      <div className="flex items-center h-full">
        <h3 className="text-base">Showing 1 - 9 of 15 results</h3>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Sort by</h2>
        <div>
          <SortSearchBar />
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
