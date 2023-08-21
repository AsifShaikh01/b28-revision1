const express = require("express");
const {DoctorModel} = require("../model/Doctor.model");


const doctorRouter = express.Router();

doctorRouter.get("/", async (req,res)=>{
    const query = req.query;
    try {
        const doctors = await DoctorModel.find(query);
        res.send(doctors);
        
    } catch (error) {
        res.send(error)
    }
})

doctorRouter.post("/" , async (req,res)=>{
    const payload = req.body;
    try {
        const doctor = new DoctorModel(payload);
        await doctor.save();
        res.send("new appointment has been added successfully!!")
        
    } catch (error) {
        res.send(error)
    }
})

doctorRouter.patch("/:id",async(req,res)=>{
    const ID = req.params.id;
    const payload = req.body;
    try {
        await DoctorModel.findByIdAndUpdate({_id : ID},payload);
        res.send("appointment has been updated successfully!!")
    } catch (error) {
        res.send(error)
    }
})

doctorRouter.delete("/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
        await DoctorModel.findByIdAndDelete({_id : ID});
        res.send("appointment has been deleted successfully!!")
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    doctorRouter
}