const express = require("express");
const router = express.Router();
const {isLoggedIn, isAuthenticated} = require("../controllers/auth")
const {getUserById, getUser, updateUser, userPurchaseList, photo} = require("../controllers/user")

// Params
router.param("userId", getUserById)

// Fetch User
router.get("/user/:userId", isLoggedIn, isAuthenticated, getUser)
router.get("/user/photo/:userId", isLoggedIn, isAuthenticated, photo)

// Update User
router.put("/user/:userId", isLoggedIn, isAuthenticated, updateUser)

// User's Purchase List
router.get("/orders/user/:userId", isLoggedIn, isAuthenticated, userPurchaseList)

module.exports = router;
