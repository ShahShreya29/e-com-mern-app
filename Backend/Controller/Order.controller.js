const OrderService = require("../Services/Order.Service.js");

const CreateOrders = async (req, res) => {
  const user = req.user;
  try {
    const createOrder = await OrderService.CreateOrder(user, req.body);
    return res.status(200).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const GetOrder = async (req, res) => {
  try {
    const GetOrders = await OrderService.GetOrder(req.params.is);
    return res.status(200).send(GetOrders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const UserOrders = async (req, res) => {
  const user = req.user;
  try {
    const userOrders = await OrderService.userOrders(user._id);
    return res.status(200).send(userOrders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

c;

module.exports = {
  CreateOrders,
  GetOrder,
  UserOrders,
};
