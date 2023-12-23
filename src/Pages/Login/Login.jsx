
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const {signInUser, googleSignIn} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    // signInUser
    signInUser(email, password)
    .then(res => {
      console.log(res.user);
      toast.success("Login successfull 🔥")
    }).catch(err=> {console.log(err);toast.error(err.message)})
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res?.user;
        toast.success("google signin successful");
        axiosSecure
          .post("/users", {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
          .then((res) => {
            if (res.data?.insertedId) {
              toast.success("user saved to db");
            }
          })
          .catch((err) => console.log(err));
        navigate("/")
      })
      .catch((err) => console.log(err));
  };
    return (
        <div className="px-12 flex flex-col items-center justify-center my-12">
          <form
            className="flex flex-col items-center py-12 px-8 shadow-md w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mb-6 mt-4 text-red-600 text-3xl font-semibold">
              Login In
            </h2>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-medium mb-2 ml-2 inline-block" htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border w-full p-3 outline-0 bg-white rounded-full px-5"
                {...register("email", { required: true })}
                placeholder="Enter your email "
              />
              {errors.email && (
                <span className="text-red-600 text-sm ml-2">email is required</span>
              )}
            </div>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-medium mb-2 ml-2 inline-block" htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border w-full p-3 outline-0 bg-white rounded-full px-5"
                {...register("password", { required: true })}
                placeholder="Enter your password "
              />
              {errors.password && (
                <span className="text-red-600 text-sm ml-2">
                  password is required
                </span>
              )}
            </div>

            <input
              type="submit"
              value={"Log In"}
              className="btn bg-red-600 text-white text-base font-bold rounded-full w-full mt-4 border-0"
            />
            <div className="divider">OR</div>
            <div>
              <div>
              <h2 className="text-lg font-medium text-center">Sign In with</h2>
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <div className="border-2 p-2 rounded-full border-blue-300 hover:bg-gray-200">
                  <FcGoogle onClick={handleGoogleSignIn} size={25} />
                </div>
              </div>
              <h2 className="mt-4">New here? <Link className="font-semibold text-red-600" to="/signup">Sign Up</Link></h2>
            </div>
          </form>
        </div>
    );
};

export default Login;