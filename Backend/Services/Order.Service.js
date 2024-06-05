const CartService = require("../Services/Cart.Service");
const Address = require("../Model/Address.Model");
const Order = require("../Model/Order.Model");

const CreateOrder = async (user, address) => {
  let address;
  if (address._id) {
    let isExist = await Address.findById(address._id);
    address = isExist;
  } else {
    address = new Address(address);
    address.user = user;
    await address.save();
    user.address.push(address);
    await user.save();
  }

  const cart = await CartService.FindUserCart(user._id);
  const orderItems = [];
  for (const item of cart.cartItem) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      qty: item.qty,
      size: item.size,
      userId: item.userId,
      discountPrice: item.discountPrice,
    });

    const CreatedOrderItem = await orderItem.save();
    orderItems.push(CreatedOrderItem);
  }

  const CreatedOrder = new Order({
    order,
    orderItems,
    totalPrice: cart.totalPrice,
    discountPrice: cart.discountPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    address: cart.address,
  });

  const SaveOrder = await CreatedOrder.save();
  return SaveOrder;
};

const PlaceOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "Placed";
  return await order.save();
};

const ConfirmOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "confirmed";
  return await order.save();
};

const shipOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "Shipped";
  return await order.save();
};

const DeliverOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "Deliver";
  return await order.save();
};

const CancelOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "Cancelled";
  return await order.save();
};

const GetOrder = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "or  derItems", populate: { path: "product" } })
    .populate("address");

  return order;
};

const userOrders = async (userId) => {
  try {
    const order = await Order.find({
      user: userId,
      orderStatus: "Placed",
    })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

const GetAllOrder = async () => {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
};
 
const DeleteOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
};

module.exports = {
  CreateOrder,
  PlaceOrder,
  ConfirmOrder,
  DeliverOrder,
  shipOrder,
  CancelOrder,
  GetOrder,
  userOrders,
  GetAllOrder,
  DeleteOrder,
};
