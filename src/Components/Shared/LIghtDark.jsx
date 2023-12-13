import { RiMoonClearFill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";
import PropTypes from "prop-types"
const LIghtDark = ({click, setClick}) => {
    return (
        <div className="flex items-center bg-slate-200 p-2 px-4 rounded-full gap-2">
            <IoSunny
              onClick={() => setClick(true)}
              size={30}
              className={`${click ? "text-blue-600" : "text-gray-600"} `}
            />
            <RiMoonClearFill
              onClick={() => setClick(false)}
              size={25}
              className={`${!click ? "text-blue-600" : "text-gray-600"} `}
            />
          </div>
    );
};

LIghtDark.propTypes = {
    click: PropTypes.bool,
    setClick:PropTypes.func,
}

export default LIghtDark;