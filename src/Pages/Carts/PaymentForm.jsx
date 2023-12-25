import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";

const PaymentForm = ({ price, products_info }) => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const currency = data.currency;
    const price = data.price;
    const address = data.address;
    const info = {
      user_email: user?.email,
      name,
      payment_email: email,
      phone,
      currency,
      price,
      address,
      products_info: products_info,
    };
    // payment request
    axiosSecure
      .post("/payment", info)
      .then((res) => {
        window.location.replace(res?.data?.url);
      })
      .catch((err) => console.log(err));      
  };
  return (
    <div className="px-5 md:px-12 flex flex-col items-center justify-center my-12 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center md:py-12 md:px-8 mx-auto"
      >
        <h2 className="mb-6 mt-4 text-red-600 text-3xl font-semibold">
          Payment Info
        </h2>
        {/* input 3  */}
        <div className="w-full mt-4">
          <label className="font-medium mb-2 ml-2 inline-block" htmlFor="name">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="border w-full p-3 outline-0 bg-white rounded-full px-5"
            {...register("name", { required: true })}
            placeholder="Enter your name "
          />
          {errors.name && (
            <span className="text-red-600 text-sm ml-2">Name is required</span>
          )}
        </div>
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
        <div className="w-full mt-4">
          <label className="font-medium mb-2 ml-2 inline-block" htmlFor="phone">
            Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="border w-full p-3 outline-0 bg-white rounded-full px-5"
            {...register("phone", { required: true })}
            placeholder="Enter your phone "
          />
          {errors.phone && (
            <span className="text-red-600 text-sm ml-2">
              Phone number is required
            </span>
          )}
        </div>
        <div className="flex items-center  md:gap-4 flex-col md:flex-row w-full">
          {/* input 3  */}
          <div className="w-full mt-4">
            <label
              className="font-medium mb-2 ml-2 inline-block"
              htmlFor="currency"
            >
              Currency<span className="text-red-600">*</span>
            </label>
            <select
              id="currency"
              className="select select-bordered w-full bg-transparent rounded-full"
              {...register("currency", { required: true })}
            >
              <option value="BDT">BDT</option>
              <option>USD</option>
              <option>URO</option>
            </select>
            {errors.currency && (
              <span className="text-red-600 text-sm ml-2">
                Currency is required
              </span>
            )}
          </div>
          {/* input 3  */}
          <div className="w-full mt-4">
            <label
              className="font-medium mb-2 ml-2 inline-block"
              htmlFor="price"
            >
              Price<span className="text-red-600">*</span>
            </label>
            <input
              type="price"
              defaultValue={price}
              id="price"
              readOnly
              name="price"
              className="border w-full p-3 outline-0 bg-white rounded-full px-5"
              {...register("price", { required: true })}
              placeholder="Enter your price "
            />
            {errors.price && (
              <span className="text-red-600 text-sm ml-2">
                Price is required
              </span>
            )}
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            className="font-medium mb-2 ml-2 inline-block"
            htmlFor="address"
          >
            Address<span className="text-red-600">*</span>
          </label>
          <input
            type="address"
            id="address"
            name="address"
            className="border w-full p-3 outline-0 bg-white rounded-full px-5"
            {...register("address", { required: true })}
            placeholder="Enter your address "
          />
          {errors.address && (
            <span className="text-red-600 text-sm ml-2">
              Address is required
            </span>
          )}
        </div>

        <input
          type="submit"
          value={"Pay"}
          className="btn bg-red-600  text-white text-base font-bold rounded-full px-12 mt-4 border-0"
        />
      </form>
    </div>
  );
};
PaymentForm.propTypes = {
  price: PropTypes.string,
  products_info: PropTypes.array,
};

export default PaymentForm;
