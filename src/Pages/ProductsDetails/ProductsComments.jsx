import { BsEmojiSmile } from "react-icons/bs";
import { MdGifBox } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
const ProductsComments = () => {
    const [writeComment, setWriteComment] = useState(false);
    return (
        <>
         <div>
                <div className="border border-gray-300  p-4 pr-8 ">
                  <div className="flex items-center justify-between p-4">
                    <div className="text-gray-600 ">
                      <h2 className="text-2xl font-medium mb-2">
                        Customers Comments
                      </h2>
                      <p>No comment yet</p>
                    </div>
                    <div>
                      <button
                        onClick={() => setWriteComment(!writeComment)}
                        className="hover:border-b flex items-center gap-2"
                      >
                       <CiEdit size={18}/> Write a Comment
                      </button>
                    </div>
                  </div>
                  {writeComment && (
                    <div className="border-t p-4">
                      <div>
                        <h2 className="text-base font-bold text-gray-400">
                          Write a Comment
                        </h2>
                        <div>
                          <textarea
                            className="textarea rounded-none textarea-bordered bg-transparent border-0 border-b focus:border-0 w-full"
                            placeholder="write your comment here"
                          ></textarea>
                          <div className="flex items-start justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button>
                                <BsEmojiSmile size={18} />
                              </button>
                              <button>
                                <MdGifBox size={20} />
                              </button>
                            </div>
                            <button className="flex btn btn-sm bg-red-600 border-0 text-white duration-300 items-center gap-1">
                              <IoSendSharp size={20} />
                              <span className="text-sm">Send</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>   
        </>
    );
};

export default ProductsComments;