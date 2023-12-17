
export const allPorducts = async () => {
    const res = await fetch("http://localhost:5001/products")
    const data = await res.json();
    return data;
}

