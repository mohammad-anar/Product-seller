import ProductsSidebar from "./ProductsSidebar";

import ProductsMain from "../../Components/ProductsMain";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6 my-12">
      {/* sidebar  */}
      <ProductsSidebar />
      {/* main content  */}
      <ProductsMain products={products}/>
    </div>
  );
};

export default Products;
