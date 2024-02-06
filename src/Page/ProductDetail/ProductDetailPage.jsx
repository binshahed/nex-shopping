import ProductDetail from "../../features/productDetail/ProductDetail";
import ProductGallery from "../../features/productDetail/ProductGallery";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <ProductGallery />
          </div>
          <div className="col-span-12 md:col-span-7">
            <ProductDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
