import { FiPhone } from "react-icons/fi";
import { FaVoicemail } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="my-12 flex flex-col lg:flex-row items-center gap-20 ">
    {/* form  */}
      <div className="bg-white rounded-xl p-12 py-16 basis-3/5">
        <div>
          <h2 className="text-3xl font-medium text-black mb-8 text-center">
            Ask anything here
          </h2>
        </div>
        <form>
          <div className="space-y-4">
            <div className="w-full flex flex-col sm:flex-row items-center gap-8">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name*"
                className="p-4 px-6 bg-[#eee] border-0 rounded-full outline-none w-full "
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email*"
                className="p-4 px-6 bg-[#eee] border-0 rounded-full outline-none w-full "
                required
              />
            </div>
            <input
              id="subject"
              type="email"
              name="subject"
              placeholder="subject*"
              className="p-4 px-6 bg-[#eee] border-0 rounded-full outline-none w-full "
              required
            />
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="message*"
              className="p-4 px-6 bg-[#eee] border-0 rounded-xl outline-none w-full resize-none "
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-red-600 text-white hover:bg-red-500 p-4 px-10 border-none rounded-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      {/* contacts  */}
      <div className="space-y-12 ">
      {/* phone  */}
        <div className="flex items-center gap-12 ">
            <FiPhone size={50} className="text-red-600 -rotate-[100deg]"/>
            <div>
                <p className="text-xl mb-4">Call for help now!</p>
                <h2 className="text-3xl sm:text-4xl font-bold hover:text-red-600 duration-300">+91-7654321</h2>
            </div>
        </div>
      {/* phone  */}
        <div className="flex items-center gap-12 ">
            <FaVoicemail size={50} className="text-red-600"/>
            <div>
                <p className="text-xl mb-4">say hello</p>
                <h2 className="text-xl sm:text-2xl font-semibold hover:text-red-600 duration-300">info@drou.com</h2>
            </div>
        </div>
      {/* phone  */}
        <div className="flex items-center gap-12 ">
            <FaMapLocationDot size={50} className="text-red-600"/>
            <div>
                <p className="text-xl mb-4">Address</p>
                <h2 className="text-lg sm:text-xl font-medium hover:text-red-600 duration-300">1259 Freedom, New York United States</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
