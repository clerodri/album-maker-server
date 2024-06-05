const Pedidos = require("./../../schemas/pedidos");

const saveOnePedido = async function (pedido, callback) {
  const { bill_name, delivery_id, album } = pedido;

  const newPedido = new Pedidos({
    bill_name: bill_name,
    delivery_id: delivery_id,
    album: album,
  });

  newPedido
    .save()
    .then((b) => {
      console.log("New Pedido:", b);
      return callback(null, b);
    })
    .catch((error) => {
      console.log("Error:", error);
      return callback({
        code: "UE",
        message: "Error to save a pedido",
        error,
      });
    });
};

const getPedidoByName = async function (bill_name, callback) {
  if (!bill_name) {
    return callback({
      code: "VP",
      message: 'The variable "bill_name" is required',
    });
  }
  try {
    const pedido = await Pedidos.findOne({ bill_name });
    if (!pedido) {
      return callback({
        code: "NF",
        message: `Pedido with bill name  "${bill_name}" NOT FOUND!!`,
      });
    }
    return callback(null, pedido);
  } catch (error) {
    return callback({
      code: "UE",
      message: `Error to find the pedido with ${bill_name}  as value`,
      error,
    });
  }
};

const updateFullPedido = async function (pedido, callback) {
  const { bill_name, delivery_id, album } = pedido;
  getPedidoByName(bill_name, async (error, result) => {
    if (error) {
      return callback({
        code: "NF",
        message: "Error finding the pedido for UPDATE!",
      });
    }

    try {
      if (result) {
        result.delivery_id = delivery_id;
        result.album = album;
        const updatedPedido = await result.save();
        return callback(null, updatedPedido);
      } else {
        const newPedido = new Pedidos({
          bill_name,
          delivery_id,
          album,
        });
        const savedPedido = await newPedido.save();
        return callback(null, savedPedido);
      }
    } catch (error) {
      console.log("Error saving pedido:", error);
      return callback({
        code: "UE",
        message: "Error handling update the pedido",
      });
    }
  });
};

const updatePartialPedido = async function (pedido, callback) {
  const { bill_name, ...updates } = pedido;

  getPedidoByName(bill_name, async (error, result) => {
    if (error) {
      return callback(error);
    }

    try {
      if (result) {
        // Solo actualizo los parametros que ingresan
        Object.keys(updates).forEach((key) => {
          result[key] = updates[key];
        });
        const updatedPedido = await result.save();
        return callback(null, updatedPedido);
      } else {
        return callback({
          code: "NF",
          message: `Pedido with bill name "${bill_name}" NOT FOUND!!`,
        });
      }
    } catch (error) {
      console.error("Error updating pedido:", error);
      return callback({
        code: "UE",
        message: "Error updating the pedido",
        error,
      });
    }
  });
};

const deletePedidoByName = async function (bill_name, callback) {
  if (!bill_name) {
    return callback({
      code: "VP",
      message: 'The variable "bill_name" is required',
    });
  }
  Pedidos.deleteMany({ bill_name: bill_name })
    .then((pedido) => {
      if (pedido.deletedCount == 0) {
        return callback({
          code: "NF",
          message: `Pedido with bill name  "${bill_name}" NOT FOUND!!`,
        });
      }
      return callback(null, pedido);
    })
    .catch((error) => {
      return callback({
        code: "UE",
        message: `Error to find the pedido with ${bill_name} for delete`,
        error,
      });
    });
};

module.exports = {
  saveOnePedido,
  getPedidoByName,
  deletePedidoByName,
  updateFullPedido,
  updatePartialPedido,
};
