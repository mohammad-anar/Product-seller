import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-5">
        <h2 className="text-4xl lg:text-5xl font-bold text-red-600">404</h2>
        <h3 className="text-xl font-medium">An error occourd</h3>
        <Link to="/">
          <button className="btn bg-red-600 text-white border-0 hover:bg-red-400 mt-5">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
