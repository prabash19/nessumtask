import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";

function ProductCard({ product }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginLeft: 4,
          marginTop: 4,
          marginBottom: 4,
          maxWidth: 200,
          boxShadow: 6,
        }}
      >
        <Card elevation={2}>
          <CardMedia
            component="img"
            height="240"
            image={product?.images && product?.images?.url}
          />
          <CardContent>
            <Typography>Name: {product?.name}</Typography>
            <Typography>Category: {product?.category?.name}</Typography>
            <Typography>Price: {product?.price}</Typography>
            <Typography>Stock: {product?.stock}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default ProductCard;
