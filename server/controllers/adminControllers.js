const getUsers = async (req,res) =>{
    res.send("all users for the admin")
}

const adminControllers = {getUsers}

export default adminControllers