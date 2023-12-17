import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/axiosSecure";

const Carts = () => {
    const axiosSecure = useAxiosSecure();
    const {data} = useQuery({
        queryKey:["carts"],
        queryFn: async () => {
           const res = await axiosSecure.get("/carts");
           return res;
        }
    })
    console.log(data);
    return (
        <div>
            cart
        </div>
    );
};

export default Carts;