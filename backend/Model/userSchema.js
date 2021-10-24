import mongoose from 'mongoose';

// how our document look like
const userSchema = mongoose.Schema({

        name: String,
        username: String,
        email: String,
        phone: Number
   
})

  
//  export default mongoose.model("user",userSchema);  
//  or
// we need to turn it into a model
const user = mongoose.model("user",userSchema);
export default user;