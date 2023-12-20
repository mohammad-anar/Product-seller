import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001",
});
const useAxiosSecure = () => {
  // axios interceptors  request
  // instance.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("token");
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  instance.interceptors.request.use((config) => {
    //set token to req config header
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`
    return config
 }, (error) => {
    return Promise.reject(error)
 });
  // axios interceptors  respnse
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        return Promise.reject(error);
      }
    }
  );

  return instance;
};

export default useAxiosSecure;
