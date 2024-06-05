const userService = require("../Services/UserService")

const UpdateCartItem= async (userId,cartItem)=>{
    try {
       const item = await findCartItemByTd(cartItem)
       if(!item){
            throw new Error("item not Found")
       }
       const user = await findUserByTd(item.userId)
       if(!user){
            throw new Error("user not Found")
       }
       if(user._id.toString()===userId.toString()){
       item.qty = cartItemDtata.qty;
       item.price = item.qty*item.product.price;
       item.discountPrice = item.qty*item.product.discountPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
   }else{
    throw new Error("can not update");
   }
    } catch (error) {
        throw new Error(error.messae);
    }
}