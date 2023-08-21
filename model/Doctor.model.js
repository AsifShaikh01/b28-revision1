const mongoose = require("mongoose");


const doctorSchema = mongoose.Schema({
  name : String,
  image : String,
  specialization : String,
  location : String,
  experience : Number,
  date : String,
  slots : Number,
  fee : Number
})

const DoctorModel = mongoose.model("doctors",doctorSchema);

module.exports={
    DoctorModel
}