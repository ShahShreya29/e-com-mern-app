const Cart = require("../Model/Cart.Model");
const cartItem = require("../Model/CartItem.Model");
const Product = require("../Model/Product.Model");

const CreateCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const CreateCart = await cart.save();
    return CreateCart;
  } catch (error) {
    throw new Error(error.messae);
  }
};

const FindUserCart = async (userId) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    let cartItems = await cartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDicount = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDicount += cartItem.discountPrice;
      totalItem += cartItem.qty;
    }

    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscount;
    cart.totalItem = totalItem;
  } catch (error) {
    throw new Error(error.message);
  }
};

const AddCartItem = async (userId, req) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    const isPresent = await cartItem.findOne({
      cart: cart._id,
      product: product._id,
      user: user._id,
    });

    if (!isPresent) {
      const cartItem = new cartItem({
        product: product._id,
        cart: cart._id,
        qty: 1,
        price: product.price,
        size: req.size,
        discountPrice: product.discountPrice,
      });
      const createdCart = await cartItem.save();
      cart.cartItems.push(createdCart);
      await cart.save();
      return "item added";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { CreateCart, FindUserCart, AddCartItem };
