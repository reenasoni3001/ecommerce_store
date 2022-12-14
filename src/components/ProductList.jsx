import { Container, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import usePagination from "./Pagination";
import Products from "./Products";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  //console.log(products);
  const searchQuery = useSelector((state) => state.search);
  console.log(searchQuery);
  //const searchQuery = "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const count = Math.ceil(products.products.length / itemsPerPage);
  const currentItems = usePagination(products.products, itemsPerPage);

  const filteredItems = searchQuery
    ? currentItems
        .currentData()
        .filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : currentItems.currentData();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e, p) => {
    setCurrentPage(p);
    currentItems.jump(p);
  };

  return (
    <Container
      sx={{
        height: "fit-content",
      }}
    >
      <Typography variant="h3">Our Products</Typography>
      {products.loading && <Typography>Loading....</Typography>}
      {!products.loading && products.error ? (
        <Typography>Opps! there is some error</Typography>
      ) : null}
      {!products.loading && products.products.length ? (
        <Grid
          container
          //justifyContent="space-around"
          display="flex"
          flexWrap="wrap"
        >
          {filteredItems.map((prod) => (
            <Grid item key={prod.id} p={2}>
              <Products product={prod} />
            </Grid>
          ))}
        </Grid>
      ) : null}
      <Pagination
        count={count}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
};

export default ProductList;
