// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    // Extract order data from the request body
    const {
      shippingInfo,
      orderedItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    // Extract user from the request object (assuming user is authenticated and available in req.user)
    const user = req.user._id;

    // create order data object
    const orderData = {
      shippingInfo,
      orderedItems,
      user,
      paymentInfo,
      paidAt: Date.now(),
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    };

    // call the repository function to save the order.
    const newOrder = await createNewOrderRepo(orderData);
    res.status(201).json({
      success: true,
      order: newOrder,
    });
  } catch (err) {
    // Pass the error to error handler middleware
    next(new ErrorHandler(err.message, 500));
  }
};
