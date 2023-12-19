import PropTypes from "prop-types"
import { FaOpencart } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
const CompairCard = ({products}) => {
    console.log(products);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const handleCard = (id) => {
        axiosSecure
          .post("/carts", { id })
          .then((res) => {
            console.log(res.data);
            if (res.data?.insertedId) {
              toast.success("item added to cart 👌");
            }
            if (res.data?.modifiedCount > 0) {
              toast.success("item added to cart 👌");
            }
          })
          .catch((err) => console.log(err));
      };
    
      const handleFavourite = (id) => {
        console.log(id);
        axiosSecure
          .post("/carts", { id })
          .then((res) => {
            if (res.data?.insertedId) {
              toast.success("item added to favourite 👌");
            }
          })
          .catch((err) => console.log(err));
      };
    return (
        <div>
            <div
            key={products._id}
            className="card  h-[350px] rounded-none bg-white w-full shadow-md hover:shadow-sm duration-300 mx-auto"
          >
            <figure className="px-14 pt-5">
              <img
                src={products.image}
                alt="image"
                className="rounded-xl max-w-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center mt-4">
              <Rating
                style={{ maxWidth: 100 }}
                value={products.rating}
              />
              <div className="space-y-1">
                <p className="text-lg text-black font-medium">
                  {products._name}
                </p>
                <h2 className="text-red-600 -mt-6 font-bold">
                  <span className="ml-2">$ {products.price}</span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <GrFavorite
                  onClick={() => handleFavourite(products._id)}
                  size={40}
                  className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                />
                <FaOpencart
                  onClick={() => handleCard(products._id)}
                  size={40}
                  className="hover:text-red duration-300 hover:bg-gray-200 rounded-full p-2 hover:text-red-600"
                />
              </div>
              <div>
                <button onClick={() => navigate(`/products/${products._id}`)} className="text-gray-700 border-b hover:text-red-600 duration-300 ">Details</button>
              </div>
            </div>
          </div>
        </div>
    );
};
CompairCard.propTypes={
    products: PropTypes.object
}
export default CompairCard;