import { Container, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container sx={{ bgcolor: "red", height: "fit-content" }}>
      <Typography variant="h3">Our Products</Typography>
      {products.loading && <Typography>Loading....</Typography>}
      {!products.loading && products.error ? (
        <Typography>Opps! there is some error</Typography>
      ) : null}
      {!products.loading && products.products.length ? (
        <ul>
          {products.products.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};

export default ProductList;
