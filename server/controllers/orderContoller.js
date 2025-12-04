const getOrders = async (req,res) => {
res.send("get all orders")
}

const getOrder = async (req,res) => {
    res.send("get order")
}

const createOrder = async (req,res) => {
    res.send("Created order")
}

const cancelOrder = async (req,res) => {
    res.send("Cancel order")
}

const orderController = {getOrders, getOrder, cancelOrder, createOrder}

export default orderController