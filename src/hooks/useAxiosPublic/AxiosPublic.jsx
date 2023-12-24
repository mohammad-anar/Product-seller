import axios from "axios";

const instance = axios.create({
    baseURL: "https://e-commerce-server-lime.vercel.app",
});
const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;