import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    useremail:{
        type:String,
        required:true
    },
    userpass:{
        type:String,
        required:true
    },
    usercustomimg:{
        type:String,
        required:false
    },
    orders:{
        type:Array,
        required:false
    }
})

export const User = mongoose.model('User',userSchema) 