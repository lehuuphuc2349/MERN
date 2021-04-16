require("dotenv").config();

const ProductsData = require("./data/products");
const connectDB = require("./config/connection");
const Product = require("./models/Product");

// Connect MongoDB
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(ProductsData);
    console.log("Data Imported Succefully");
    process.exit();
  } catch (error) {
    console.log("Data Import Fail");
    process.exit(1);
  }
};

importData();
