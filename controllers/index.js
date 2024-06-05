const express = require("express");
const router = express.Router();

const pedidos = require("./pedidos");

/**
 * Here the list of controllers
 * - products
 * - services
 * - items
 * - ...
 */
router.use("/pedido", pedidos);

/**
 * Here the paths
 */

module.exports = router;
