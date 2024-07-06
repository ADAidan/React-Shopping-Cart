import { useContext } from "react";
import ProductListing from "./product-listing";
import { ShoppingContext } from "../context/shopping-context";
import { ProductViewContext } from "../context/product-view-context";
import "./homepage.css";

const HomePage = () => {
  const { products } = useContext(ShoppingContext);
  const { view } = useContext(ProductViewContext);

  return (
    <div className="main-container">
      <div
        className={`products-container ${
          view == "list" ? "list-view" : "module-view"
        }`}
      >
        {products.map((product) => (
          <ProductListing key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
