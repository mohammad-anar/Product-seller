import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../SignUp/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate();
  const { signInUser, googleSignin } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    // signin user
    signInUser(email, password)
      .then(() => {
        toast.success("login successfull");
        navigate(`${location?.state || "/"}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
    return (
        <div className="px-12 flex flex-col items-center justify-center min-h-screen">
          <form
            className="flex flex-col items-center p-12 px-16 shadow-xl w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="my-12 mt-4 text-blue-600 text-3xl font-medium">
              Sign In
            </h2>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border w-full p-2 outline-gray-400"
                {...register("email", { required: true })}
                placeholder="Enter your email "
              />
              {errors.email && (
                <span className="text-red-600 text-sm">email is required</span>
              )}
            </div>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border w-full p-2 outline-gray-400"
                {...register("password", { required: true })}
                placeholder="Enter your password "
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  password is required
                </span>
              )}
            </div>

            <input
              type="submit"
              value={"Log In"}
              className="btn bg-blue-600 text-white font-bold w-full mt-4 rounded-none"
            />
            <div className="divider">OR</div>
            <div>
              <div>
              <h2 className="text-lg font-medium text-center">Sign In with</h2>
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <div onClick={() => {
                  googleSignin()
                  .then(res =>{
                    console.log(res.user);
                    toast.success("Login successful")
                    navigate(`${location?.state || "/"}`);
                  })
                  .catch(err => {
                    console.log(err);
                    toast.error(err.message)
                  })
                  }} className="border-2 p-2 rounded-full border-blue-300 hover:bg-gray-200">
                  <FcGoogle size={25} />
                </div>
              </div>
              <h2 className="mt-4">New here? <Link className="font-medium text-blue-600" to="/signup">Sign Up</Link></h2>
            </div>
          </form>
        </div>
    );
};

export default Login;