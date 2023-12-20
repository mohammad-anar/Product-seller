import axios from "axios";

export const allPorducts = async () => {
    const res = await fetch("http://localhost:5001/products")
    const data = await res.json();
    return data;
}

export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData);
    console.log(data);
    return data;
    

}
