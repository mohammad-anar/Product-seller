import logo from "../../../assets/logo.png";

const Logo = () => {
    return (
        <div className="px-2 mx-2">
          <img className="max-w-[150px]" src={logo} alt="logo" />
        </div>
    );
};

export default Logo;