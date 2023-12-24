import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useState } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Estonia",
];

const Shipping = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="max-w-xl order-last lg:order-first">
      <h3 className="text-xl mb-2">Pick a delivery date</h3>
      <div className="flex items-center w-full bg-gray-200 max-w-xl relative px-4 rounded-md">
        <FaRegCalendarAlt className="text-gray-700 mb-1" />
        <DatePicker
          className="outline-0  p-3 bg-transparent  rounded-lg px-4 text-gray-700"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <input
        className="outline-0 my-3 p-3 bg-gray-200 w-full  rounded-lg px-4 text-gray-700"
        type="text"
        placeholder="00:00 AM/PM"
      />
      <p className="text-sm text-gray-500">
        Pick delivery date and time as you choose. Delivery Time takes place
        between 12PM - 4PM MON-FRI AND 8AM-11AM SAT.
      </p>

      <div className="mt-6">
        <h2 className="text-xl mb-4">Get shipping estimates</h2>
        <select
          defaultValue={null}
          className="select select-bordered text-gray-700 w-full max-w-xs bg-transparent focus:border-0 focus:outline-1"
        >
          <option disabled selected>
            -----
          </option>
          {countries.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <input
          className="outline-0 my-4 p-3 bg-gray-200 w-full max-w-[320px]  rounded-lg px-4 text-gray-800"
          type="text"
          placeholder="Zip/Postal Code"
        />
        <button
          className={` block btn btn-wide bg-red-600 text-base text-white border-0 rounded-full hover:bg-red-500`}
        >
          Calcualte Shipping
        </button>
      </div>
    </div>
  );
};

export default Shipping;
