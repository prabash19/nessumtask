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

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const { products: data } = useProducts({});
  const [filterProduct, setFilterProduct] = useState(null);
  const filterProductCategory = (category) => {
    const res = data.filter((product) => product.category.name === category);
    setFilterProduct(res);
  };
  useEffect(() => {
    setFilterProduct(data);
  }, [category]);
  useEffect(() => {
    ["Electronics", "Clothing", "Groceries"].includes(category) &&
      filterProductCategory(category);
    category === "All" && setFilterProduct(data);
  }, [category]);
  return (
    <Container>
      <Typography>Products </Typography>
      <div className="check">
        <div className="checkProduct">
          <FormControl fullWidth>
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
