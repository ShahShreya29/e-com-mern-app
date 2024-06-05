const userService = require("./User.Service");

const UpdateCartItem = async (userId, cartItem) => {
  try {
    const item = await findCartItemByTd(cartItem);
    if (!item) {
      throw new Error("item not Found");
    }
    const user = await findUserByTd(item.userId);
    if (!user) {
      throw new Error("user not Found");
    }
    if (user._id.toString() === userId.toString()) {
      item.qty = cartItemData.qty;
      item.price = item.qty * item.product.price;
      item.discountPrice = item.qty * item.product.discountPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("can not update");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemByTd(cartItemId);
    const user = await userService.findUserByTd(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
      await cartItem.findByIdAndDelete({ cartItemId });
    } else {
      throw new Error("can not delete");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const GetCartItem = async (cartItemId) => {
  try {
    const cartItem = await findCartItemByTd(cartItemId);
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error(" not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { UpdateCartItem, removeCartItem, GetCartItem };
