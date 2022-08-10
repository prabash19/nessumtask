export default function useProducts() {
  const products = [
    {
      id: 1,
      name: "Iphone X",
      category: { name: "Electronics", id: 1 },
      price: 1000,
      stock: 0,
      images: { url: "/images/iphonex.jpg" },
    },
    {
      id: 2,
      name: "T.V",
      category: { name: "Electronics", id: 1 },
      price: 1000,
      stock: 5,
      images: { url: "/images/tv.jpg" },
    },
    {
      id: 3,
      name: "Tshirt",
      category: { name: "Clothing", id: 3 },
      price: 1000,
      stock: 10,
      images: { url: "/images/tshirt.jpg" },
    },
    {
      id: 4,
      name: "Pant",
      category: { name: "Clothing", id: 3 },
      price: 1000,
      stock: 0,
      images: { url: "/images/pants.jpg" },
    },
    {
      id: 5,
      name: "Fruits",
      category: { name: "Groceries", id: 2 },
      price: 1000,
      stock: 20,
      images: { url: "/images/fruits.jpg" },
    },
    {
      id: 6,
      name: "Vegetables",
      category: { name: "Groceries", id: 2 },
      price: 1000,
      stock: 6,
      images: { url: "/images/vegetables.jpg" },
    },
    {
      id: 7,
      name: "Samsung",
      category: { name: "Electronics", id: 1 },
      price: 1000,
      stock: 2,
      images: { url: "" },
    },
  ];
  return { products };
}
