import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    phoneNo:String
})

autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user')


const user =  mongoose.model('user', userSchema);
export default user;