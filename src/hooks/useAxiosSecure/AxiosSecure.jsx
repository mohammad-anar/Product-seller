import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001",
});
const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
