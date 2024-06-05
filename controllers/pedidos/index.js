const express = require("express");
const router = express.Router();
const pedidos = require("../../models/pedidos");

//ROOT
router.get("/", (req, res) => {
  res.send("Ready It's Pedido!");
});

// Post
router.post("/", (req, res) => {
  return pedidos.saveOnePedido(req.body, (error, result) => {
    if (error) {
      return res.status(500).json({ code: "UE", message: "Server error" });
    }

    return res.json({ code: "OK", message: "Pedido saved successfully!" });
  });
});

// Get
router.get("/query", (req, res) => {
  const { bill_name: bill_name } = req.query;
  return pedidos.getPedidoByName(bill_name, (error, result) => {
    if (!error) {
      return res.json({
        code: "OK",
        message: "Pedido Found!",
        data: { pedidos: result },
      });
    }
    console.log("Error to get a Pedido:", error);
    if (error.code == "VP") {
      return res.status(421).json({ code: "PF", message: error.message });
    }
    if (error.code == "NF") {
      return res.status(404).json({ code: "NF", message: error.message });
    }
    return res.status(500).json({ code: "UE", message: "Server error" });
  });
});

// Delete
router.delete("/query", (req, res) => {
  const { bill_name: bill_name } = req.query;
  return pedidos.deletePedidoByName(bill_name, (error, result) => {
    if (!error) {
      return res.json({
        code: "OK",
        message: "Pedido found",
        data: { pedidos: result },
      });
    }
    console.log("Error deleting Pedido:", error);
    if (error.code == "VP") {
      return res.status(421).json({ code: "PF", message: error.message });
    }
    if (error.code == "NF") {
      return res.status(401).json({ code: "NF", message: error.message });
    }
    return res.status(500).json({ code: "UE", message: "Server error" });
  });
});

// PUT
router.put("/", (req, res) => {
  pedidos.updateFullPedido(req.body, (error, result) => {
    if (error) {
      console.log("Error handleing pedido update", error);
      if (error.code === "UE") {
        return res
          .status(500)
          .json({ code: "UE", message: "Server error", error: error.message });
      } else {
        return res.status(400).json({
          code: "GE",
          message: "Error getting the pedido",
          error: error.message,
        });
      }
    }
    if (!result) {
      return res.status(404).json({ code: "NF", message: "Pedido not found" });
    }
    return res.json({
      code: "OK",
      message: "Pedido full updated successfully!",
      result,
    });
  });
});

// PATCH
router.patch("/query", (req, res) => {
  pedidos.updatePartialPedido(req.body, (error, result) => {
    if (error) {
      console.error("Error handling pedido update:", error);
      if (error.code === "UE") {
        return res
          .status(500)
          .json({ code: "UE", message: "Server error", error: error.message });
      }
      return res.status(400).json({
        code: "GE",
        message: "Error getting the pedido",
        error: error.message,
      });
    }

    if (!result) {
      return res.status(404).json({ code: "NF", message: "Pedido not found" });
    }

    return res.json({
      code: "OK",
      message: "Pedido partial updated successfully!",
      result,
    });
  });
});

module.exports = router;
