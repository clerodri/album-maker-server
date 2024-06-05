const mongoose = require("mongoose");

// Define the schema for Pedido
const PedidoSchema = mongoose.Schema({
  bill_name: String,
  delivery_id: String,
  album: String,
});

// Create and export the model
const Pedido = mongoose.model("pedido", PedidoSchema);
module.exports = Pedido;
