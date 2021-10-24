import User from "../Model/userSchema.js";

//Get all users
export const getUser =async (request,response) => {
    try{
       let user = await  User.find()
        response.json(user)
    }catch(error){
        response.json({message: error.message})
    }
}

//save dataof the user in db
export const addUser = async(request,response) =>{
    // console.log(req.body);
    // retreive the info of user from front end
    const user= request.body;
    console.log("inside database")
    const newUser = new User(user)

    try{
        await  newUser.save()
       response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({ message: error.message});  
    }
    // res.json("goodmorning")
}

//Get user by id
export const getUserById = async ( request , response ) => {
    const id = request.params.id;
    try{
        const user = await User.findById(id)
        response.json(user)
    }catch(error){
        response.status(409).json({ message: error.message});
    }
}

//save data of edited user in the database
export const editUser = async ( request , response ) => {
    let user = await User.findById(request.params.id)
    user = request.body;

    const editUser = new User(user)
    try{
        await User.updateOne({_id:request.params.id},editUser)
        response.json(editUser)
    }catch(error){
        response.json({message:error.message})
    }
}

//deleting data of user from database
export const deleteUser =async (request,response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}