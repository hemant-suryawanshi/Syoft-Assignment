const express = require("express");

const { getProduct, updateProduct, createProduct } = require("../Controllers/Product");

const router = express.Router();
const { requireSignin, adminMiddelware } = require("../Middelware/middelware");
const { combineMiddelware } = require("../Middelware/middelware");

router.post("/product/create",requireSignin,adminMiddelware,createProduct);
router.post("/product/read",requireSignin,combineMiddelware,getProduct);
router.post("/product/update/id",requireSignin,combineMiddelware,updateProduct);


module.exports = router;
