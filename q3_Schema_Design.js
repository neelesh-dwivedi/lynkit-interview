// Design a schema in mongoose for : [ Category, Product, Product _Details]

// Importing mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    parentCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    status: {
      type: Boolean,
      default: false
    },
    created_at: {
      type: Number,
      default: Date.now(),
    },
    updated_at: {
      type: Number,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  },
);

const ProductDetailsSchema = new Schema(
  {
    productTitle: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    status: {
      type: Boolean,
      default: false
    },
    created_at: {
      type: Number,
      default: Date.now(),
    },
    updated_at: {
      type: Number,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  },
);

const ProductSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    created_at: {
      type: Number,
      default: Date.now(),
    },
    updated_at: {
      type: Number,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  },
);

const categorySchema = mongoose.model('Category', CategorySchema);
const productDetailsSchema = mongoose.model('Product', ProductDetailsSchema);
const productSchema = mongoose.model('SuperProduct', ProductSchema);

module.exports = {
  categorySchema,
  productDetailsSchema,
  productSchema,
}