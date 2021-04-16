require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");

// Connection Database
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App running on port:${PORT}`);
});
