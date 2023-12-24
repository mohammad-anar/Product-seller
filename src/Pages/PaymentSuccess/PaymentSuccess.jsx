import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
  const { tranId } = useParams();
  useEffect(() => {
    axiosSecure
      .delete(`/carts`)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => console.log(err));
  },[axiosSecure])
  return (
    <div className="flex items-center flex-col justify-start h-[80vh]">
      <img
        className="w-[300px]"
        src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
        alt=""
      />
      <h2 className="text-success text-xl font-medium flex items-center gap-2 mb-2">
        {" "}
        <FaCheckCircle className="text-success" size={20} />
        Payment Success
      </h2>
      <h3 className="text-base">
        <span className="font-bold">Transection id :</span> {tranId}
      </h3>
    </div>
  );
};

export default PaymentSuccess;
