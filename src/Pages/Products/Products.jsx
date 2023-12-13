import ProductsSidebar from "./ProductsSidebar";

import ProductsMain from "../../Components/ProductsMain";

const Products = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6 my-12">
      {/* sidebar  */}
      <ProductsSidebar />
      {/* main content  */}
      <ProductsMain/>
    </div>
  );
};

export default Products;
