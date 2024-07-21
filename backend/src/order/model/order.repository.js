import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  try {
    const order = new OrderModel(data);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
}; 
