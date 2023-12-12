import { FcElectronics } from "react-icons/fc";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const CategoryDropdown = () => {
  return (
    <div className="p-4">
      <div className="space-y-4 text-lg">
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <FcElectronics size={25} /> Electronics
        </p>
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <HiOutlineDesktopComputer size={25} /> Computers
        </p>
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <FaCameraRetro size={25} /> Cameras
        </p>
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <TfiHeadphoneAlt size={25} /> Head Phones
        </p>
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <IoPhonePortraitOutline size={25} /> Phones
        </p>
        <p className="flex hover:border-b-2 items-center gap-6 font-medium">
          <IoWatchOutline size={25} /> Smart Watches
        </p>
      </div>
    </div>
  );
};

export default CategoryDropdown;

// Electronics
// Computers
// Cameras
// Smart Watches
// Power Banks
// Bluetooth
// Chargers
// More Categories
