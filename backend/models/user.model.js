const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
});

const UserModel = new mongoose.model("user", userSchema);

module.exports = UserModel;