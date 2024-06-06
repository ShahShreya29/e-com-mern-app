const UserService = require("../Services/User.Service.js");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const UserController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await UserService.signUp({ name, email, password, role });
      if (user.error) {
        return res.status(400).json({ error: "Bad request" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.signIn({ email, password });

      if (user) {
        const payload = { id: user.id };
        const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
          expiresIn: "15s",
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_KEY, {
          expiresIn: "1min",
        });
        res.status(200).json({ user, accessToken, refreshToken });
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  refreshToken: async (req, res) => {
    const refreshToken = req.headers["refresh-token"];

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
      const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_KEY, {
        expiresIn: "15s",
      });

      return res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken: newAccessToken,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = UserController;

// // userController.js
// const userService = require("../Services/User.Service.js");
// const CartService = require("../Services/Cart.Service.js");
// const upload = require("../Config/Multer.js"); // Import multer configuration

// exports.signUp = async (req, res) => {
//   try {

//     const user = await userService.signUp({ ...req.body, profile: req.file });
//     await CartService.CreateCart(user);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.signIn = async (req, res) => {
//   try {
//     const profilePic = req.file;
//     const { email, password } = req.body;
//     const { accessToken, refreshToken } = await userService.signIn(
//       email,
//       password,
//       profilePic
//     );
//     res.json({ accessToken, refreshToken, email, password });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.refreshToken = async (req, res) => {
//   try {
//     const { refreshToken } = req.body;
//     const accessToken = await userService.refreshToken(refreshToken);
//     res.json({ accessToken });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
