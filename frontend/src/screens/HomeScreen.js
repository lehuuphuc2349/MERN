import React from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./HomeScreen.css";
import { getProducts as listProducts } from "../redux/action/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="homescreen">
        <h2 className="homescreen__title">Last Products</h2>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
