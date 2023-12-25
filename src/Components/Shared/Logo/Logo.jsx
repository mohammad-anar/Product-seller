import logo from "../../../assets/logo.png";

const Logo = () => {
    return (
        <div className="px-2 mx-2">
          <img className="w-[180px] md:w-[200px]" src={logo} alt="logo" />
        </div>
    );
};

export default Logo;