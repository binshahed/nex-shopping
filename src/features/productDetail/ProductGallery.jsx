/* eslint-disable react/prop-types */
import { useState } from "react";
// import product1 from "@/assets/products/product-1.jpg";
// import product2 from "@/assets/products/product-2.jpg";
// import product3 from "@/assets/products/product-3.jpg";
// import product4 from "@/assets/products/product-4.jpg";
const ProductGallery = ({ productImage }) => {
  const images = [productImage];
  const [previewImg, setPreviewImg] = useState(images[0]);

  const handlePreviewImage = (im) => {
    setPreviewImg(im);
  };

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12  md:col-span-3">
        {images.map((im, i) => (
          <img
            key={i}
            onClick={() => handlePreviewImage(im)}
            className="mb-3 border rounded-xl"
            src={im}
            alt=""
          />
        ))}
      </div>
      <div className="col-span-12 md:col-span-9">
        <img className="border rounded-xl" src={previewImg} alt="" />
      </div>
    </div>
  );
};

export default ProductGallery;
