import ProductsSidebar from "./ProductsSidebar";


import ContentTop from "./ContentTop";

const Products = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6 my-12">
      {/* sidebar  */}
      <ProductsSidebar />
      {/* main content  */}
      <div className="bg-white md:col-span-7 order-first lg:order-last mb-20 lg:mb-0">
        {/* top bar  */}
        <ContentTop/>
      </div>
    </div>
  );
};

export default Products;
