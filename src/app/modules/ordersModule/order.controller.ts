import { Request, Response } from "express";
import { orderServices } from "./order.service";

const crateProduct = async (req: Request, res: Response) => {
  try {
    const { order: OrderDATA } = req.body;
    const result = await orderServices.createOrderToDB(OrderDATA);

    res.status(200).json({
      success: true,
      message: "Order is created successfully",
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
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { product: ProductDATA } = req.body;
//     const zodParsedData = productValidationSchema.parse(ProductDATA);

//     const result = await productServices.createProductToDB(zodParsedData);

//     res.status(200).json({
//       success: true,
//       message: "Product is created successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrderFromDB();

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

// const deleteAProduct = async (req: Request, res: Response) => {
//   try {
//     const { productID } = req.params;

//     await productServices.deleteProductFromDB(productID);

//     res.status(200).json({
//       success: true,
//       message: "Product is deleted successfully",
//       data: null,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
// const updateAProduct = async (req: Request, res: Response) => {
//   const updatedData = req.body;
//   const productID = req.params.productID;
//   try {
//     const result = await productServices.updateAProductFromDB(
//       productID,
//       updatedData
//     );

//     res.status(200).json({
//       success: true,
//       message: "Product is updated succesfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
// const getASingleProduct = async (req: Request, res: Response) => {
//   try {
//     const { productID } = req.params;

//     const result = await productServices.getSingleProductsFromDB(productID);
//     res.status(200).json({
//       success: true,
//       message: "Product retrieve Successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
const getOrdersBYsearch = async (req: Request, res: Response) => {
  try {
    const searchItem = req.query.email as string;
    const result = await orderServices.getordersbySerachFromDB(searchItem);

    res.status(200).json({
      success: true,
      message: `Orders matching search term ${searchItem}fetched successfully!`,
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

export const orderController = {
  crateProduct,
  getAllOrders,
  getOrdersBYsearch,
  // getAllProducts,
  // getProductsBYsearch,
  // updateAProduct,
  // deleteAProduct,
  // getASingleProduct,
  // createOrder,
};
