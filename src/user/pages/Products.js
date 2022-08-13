import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import useProducts from "../hooks/components/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");

  //get all products data
  const { products: data } = useProducts({});

  const [filterProduct, setFilterProduct] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const filterProductCategory = (category) => {
    const res = data.filter((product) => product.category.name === category);
    setFilterProduct(res);
  };

  const filterProductPrice = (price) => {
    const res = data.filter((product) => product.price === price);
    setFilterProduct(res);
  };

  const filterProductStock = (stock) => {
    const res = data.filter((product) => {
      if (stock === "Available") {
        return product.stock > 0;
      } else {
        return product.stock <= 0;
      }
    });
    setFilterProduct(res);
  };

  useEffect(() => {
    setFilterProduct(data);
  }, [category, stock, price]);

  useEffect(() => {
    ["Electronics", "Clothing", "Groceries"].includes(category) &&
      filterProductCategory(category);
    category === "All" && setFilterProduct(data);
  }, [category]);

  useEffect(() => {
    [1000, 5000].includes(price) && filterProductPrice(price);
    price === "All" && setFilterProduct(data);
  }, [price]);

  useEffect(() => {
    ["Available", "Unavailable"].includes(stock) && filterProductStock(stock);
    stock === "All" && setFilterProduct(data);
  }, [stock]);

  return (
    <Container>
      <Typography>Products </Typography>
      <div className="check">
        <div className="checkProduct">
          <div className="checkProductCategory">
            <FormControl fullWidth className="checkProductCategory">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Electronics"}>Electronics</MenuItem>
                <MenuItem value={"Clothing"}>Clothing</MenuItem>
                <MenuItem value={"Groceries"}>Groceries</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="checkProductPrice">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Price"
                onChange={handlePriceChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={5000}>5000</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Stock</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stock}
              label="Stock"
              onChange={handleStockChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Available"}>Available</MenuItem>
              <MenuItem value={"Unavailable"}>Unavailable</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Grid container spacing={3}>
        {filterProduct?.map((product) => (
          <Grid item key={product?.id} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
