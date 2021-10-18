import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : "This field required"
    },
    username:{
        type : String,
        required : "This field required"
    },
    email:{
        type : String,
        required : "This field required"
    },
    phone:{
        type : Number,
        required : "This field required"
    }
})
 userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.path('phone').validate((phone)=>{
   phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   return phoneRegex.test(phone);
  }, "Invalid Number");
  
//  export default mongoose.model("user",userSchema);  
//  or

const user = mongoose.model("user",userSchema);
export default user;