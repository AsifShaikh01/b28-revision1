const express = require("express");
const dotenv = require("dotenv");
const {connection} = require("./config/db");
dotenv.config();
const {DoctorRouter} = require("./model/Doctor.model");
const { doctorRouter } = require("./routes/Doctor.routes");
let cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())
app.use("/appointments",doctorRouter);

app.listen(process.env.PORT , async()=>{
    try {
        await connection;
        console.log("connected to the db!!")
    } catch (error) {
        console.log("can't connect??")
    }
    console.log(`server is running at port ${process.env.PORT}`)
})