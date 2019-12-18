const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const orderController = require("../controllers/order");
const productController = require("../controllers/product");

router.post(
  "/order/create/:userId",
  authController.protect,
  authController.isAuth,
  userController.userOrderHistory,
  productController.decreaseQuantity,
  orderController.createOrder
);

router.param("userId", userController.userById);

module.exports = router;
