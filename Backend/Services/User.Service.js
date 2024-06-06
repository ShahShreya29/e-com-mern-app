const User = require("../Model/User.Model");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// // Function to hash password
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// // Function to generate access token
// const generateAccessToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY, {
//     expiresIn: "15m",
//   });
// };

// // Function to generate refresh token
// const generateRefreshToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY);
// };

const UserService = {
  signUp: async (user) => {
    try {
      const existingUser = await User.findOne({ email: user.email });
      if (existingUser) {
        return { error: "User already exists with this email:", email };
      }

      const newData = new User({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      });
      const saveData = await newData.save();
      return saveData.toObject(); // Return user object without password
    } catch (error) {
      console.error(error);
      return { error: "Internal Server Error" };
    }
  },

  signIn: async (user) => {
    try {
      const existingUser = await User.findOne({
        email: user.email,
        password: user.password,
      });
      return existingUser;
    } catch (error) {
      console.error(error);
      return { error: "Internal Server Error" };
    }
  },
};

module.exports = UserService;


// // userService.js
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const User = require("../Model/User.Model.js");
// const RefreshToken = require("../Model/RefreshToken.Model.js")

// // Function to hash password
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// // Function to generate access token
// const generateAccessToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY, {
//     expiresIn: "15m",
//   });
// };

// // Function to generate refresh token
// const generateRefreshToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY);
// };

// // Function to create new user in the database
// exports.signUp = async (userData) => {
//   try {
//     const { name, email, password, profile } = userData;
//     const existingUser = await User.findOne({ email  });
//     if (existingUser) {
//       return { error: "User already exists with this email   : " , email };
//     }

//     const hashedPassword = await hashPassword(password);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       profile,
//     });
//     await newUser.save();
//     return newUser;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Function to authenticate user and generate access token
// exports.signIn = async (email, password) => {
//   try {
//     const user = await User.findOne({ email });
//     if (!user) throw new Error("Invalid email or password");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error("Invalid email or password");

//     const accessToken = generateAccessToken(user._id);
//     const refreshToken = generateRefreshToken(user._id);

//     // Save refresh token to database
//     const newRefreshToken = new RefreshToken({ token: refreshToken });
//     await newRefreshToken.save();

//     return { accessToken, refreshToken };
//   } catch (error) {
//     throw error;
//   }
// };

// // Function to verify refresh token and generate new access token
// exports.refreshToken = async (refreshToken) => {
//   try {
//     const existingToken = await refreshToken.findOne({ token: refreshToken });
//     if (!existingToken) throw new Error("Invalid refresh token");

//     const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
//     const userId = decoded.userId;

//     const accessToken = generateAccessToken(userId);

//     return accessToken;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


