import { MdAddToPhotos } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.productName.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = parseFloat(form.rating.value);
    const description = form.description.value;
    const product = {
      product_name,
      image,
      category,
      price,
      rating,
      description,
    };
    axiosSecure.post("/products", product).then(() => {
        toast.success("Product inserted 🔥")
    }).catch(err => {
        toast.error(err.message)
    })
  };
  return (
    <div>
      {/* top bar  */}
      <div className="flex items-center justify-between my-5 mb-2 bg-gray-400 p-4 px-6">
        <h2 className="text-xl  font-bold text-white">Add Products</h2>
        <h2>
          <MdAddToPhotos size={30} className="text-white" />
        </h2>
      </div>
      {/* form  */}
      <div className="max-w-2xl bg-gray-400 mx-auto p-10 py-12">
        <form onSubmit={handleAddItem} className="space-y-4">
          {/* 1  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="product-name"
              className="text-lg block ml-1 text-gray-100"
            >
              Product name
            </label>
            <input
              id="product-name"
              type="text"
              name="productName"
              placeholder="Type here"
              className="input bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 input-bordered focus:outline-none border-2 border-gray-100  w-full"
            />
          </div>
          {/* 2  */}
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-lg block ml-1 text-gray-100">
              image
            </label>
            <input
              id="image"
              type="url"
              name="image"
              placeholder="Type here"
              className="input bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 input-bordered focus:outline-none border-2 border-gray-100  w-full"
            />
          </div>
          {/* 3  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-lg block ml-1 text-gray-100"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="Type here"
              className="input bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 input-bordered focus:outline-none border-2 border-gray-100  w-full"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            {/* 4  */}
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="price"
                className="text-lg block ml-1 text-gray-100"
              >
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Type here"
                className="input bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 input-bordered focus:outline-none border-2 border-gray-100  w-full"
              />
            </div>
            {/* 5  */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="rating"
                className="text-lg block ml-1 text-gray-100"
              >
                rating
              </label>
              <input
                id="rating"
                type="text"
                name="rating"
                placeholder="Type here"
                className="input bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 input-bordered focus:outline-none border-2 border-gray-100  w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-lg block ml-1 text-gray-100"
            >
              descriptoin
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered bg-transparent placeholder-gray-100 text-gray-100 focus:border-gray-300 focus:outline-none border-2 border-gray-100  w-full "
              placeholder="description"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="text-white btn block bg-red-600 border-0 px-10 mx-auto"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
