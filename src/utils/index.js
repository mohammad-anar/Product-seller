import axios from "axios";

export const allPorducts = async () => {
    const res = await fetch("http://localhost:5001/products")
    const data = await res.json();
    return data;
}

export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    axios.post(`https://api.imgbb.com/1/upload?key${import.meta.env.IMGBB_API}`)
    .then(res => {console.log(res.data);}).catch(err => {console.log(err);})

}
