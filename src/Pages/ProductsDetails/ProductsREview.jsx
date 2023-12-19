import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const ProductsREview = () => {
    const [rating, setRating] = useState(0)
    const [writeRevidw, setWriteReview] = useState(false)
    return (
        <>
            <div className="border border-gray-300  p-4 pr-8 ">
                  <div className="flex items-center justify-between p-4">
                    <div className="text-gray-600 ">
                      <h2 className="text-2xl font-medium mb-2">
                        Customer reviews
                      </h2>
                      <p>No reviews yet</p>
                    </div>
                    <div>
                      <button onClick={(() => setWriteReview(!writeRevidw))} className="hover:border-b flex items-center gap-2"> <CiEdit size={18}/> Write a review</button>
                    </div>
                  </div>
                  <div className="border-t p-4">
                  {writeRevidw &&  <div>
                      <h2 className="text-base font-bold text-gray-400 flex items-center gap-2">
                      <CiEdit size={18}/> Write a review
                      </h2>
                     <form >
                      {/* name  */}
                        <div className="mt-4">
                          <label
                            className="font-medium mb-2 ml-1 block"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="input input-bordered w-full bg-transparent border focus:border-0"
                          />
                        </div>
                      {/* email  */}
                        <div className="mt-4">
                          <label
                            className="font-medium mb-2 ml-1 block"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="input input-bordered w-full bg-transparent border focus:border-0"
                          />
                        </div>
                        {/* rating  */}
                        <div className="my-4">
                        <label
                            className="font-medium mb-2 ml-1 block"
                          >
                            Rating
                          </label>
                        <Rating value={rating} style={{ maxWidth: 100 }} onChange={setRating}/>
                        </div>
                      {/* title  */}
                        <div className="mt-4">
                          <label
                            className="font-medium mb-2 ml-1 block"
                            htmlFor="title"
                          >
                            Review title
                          </label>
                          <input
                          id="title"
                            type="text"
                            placeholder="Give your review a title"
                            className="input input-bordered w-full bg-transparent border focus:border-0"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            className="font-medium mb-2 ml-1 block"
                            htmlFor="title"
                          >
                            Body of review (1500)
                          </label>
                          <textarea className="textarea textarea-bordered bg-transparent border focus:border-0 w-full" placeholder="write your comment here"></textarea>
                        </div>
                        <div>
                            <button className="btn bg-red-600 border-0 text-white mt-2 ml-auto block">Submit review</button>
                        </div>
                      </form>
                    </div>}
                  </div>
                </div>
        </>
    );
};

export default ProductsREview;