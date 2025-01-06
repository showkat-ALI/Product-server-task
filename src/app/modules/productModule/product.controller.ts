import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./product.validation";

const crateProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductDATA } = req.body;
    const zodParsedData = productValidationSchema.parse(ProductDATA);

    const result = await productServices.createProductToDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const createOrder = async (req: Request, res: Response) => {
  try {
    const { product: ProductDATA } = req.body;
    const zodParsedData = productValidationSchema.parse(ProductDATA);

    const result = await productServices.createProductToDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products are retrieved succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    await productServices.deleteProductFromDB(productID);

    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const updateAProduct = async (req: Request, res: Response) => {
  const updatedData = req.body;
  const productID = req.params.productID;
  try {
    const result = await productServices.updateAProductFromDB(
      productID,
      updatedData
    );

    res.status(200).json({
      success: true,
      message: "Product is updated succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const getASingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const result = await productServices.getSingleProductsFromDB(productID);
    res.status(200).json({
      success: true,
      message: "Product retrieve Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const getProductsBYsearch = async (req: Request, res: Response) => {
  try {
    const searchItem = req.query.searchTerm as string;
    console.log(searchItem);
    const result = await productServices.getProductsbySerachFromDB(searchItem);

    res.status(200).json({
      success: true,
      message: `Products matching search term ${searchItem}fetched successfully!`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

export const productController = {
  crateProduct,
  getAllProducts,
  getProductsBYsearch,
  updateAProduct,
  deleteAProduct,
  getASingleProduct,
  createOrder,
};
