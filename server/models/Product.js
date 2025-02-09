import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
	{
		name: String,
		category: String,
		price: Number,
		description: String,
		rating: Number,
		supply: Number,
	},
	{ timestamps: true },
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
