const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const authRouter = require("./routes/auth.route")


const app = express();
app.use(express.json());


//Database Connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database Connection Sucessful");
    }).catch((err)=>{
        console.log("DB connect Failed",err);
    })

app.get("/", (req,res)=>{
    res.send("Route is working")
})
app.use("/auth", authRouter)


const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Srever Is running @ ${PORT}`);

})

