const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    image: Array,
    name: String,
    details: String,
    price: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


const Product = model("Product", productSchema);
module.exports = Product;
