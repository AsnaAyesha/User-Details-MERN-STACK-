import User from "../Model/userSchema.js";

export const getUser = (req,res) => {
    res.send("hello world!")
}

export const addUser = async(req,res) =>{
    console.log(req.body);
    const user= req.body;
    const newUser = new User(user)

    try{
        await  newUser.save()
        res.json(newUser)
    }catch(err){
        res.json({msg: err.msg})
    }
    // res.json("goodmorning")
}