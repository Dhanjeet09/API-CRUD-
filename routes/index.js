var express = require("express");
var router = express.Router();
const employee = require("../models/employee");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" }); // 'uploads/' is the directory where images will be stored

// CREATE employee
router.post("/emp/create", async (req, res) => {
  try {
    const newEmployee = await employee.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      contact: req.body.contact,
      profileimage: req.body.profileimage,
    });
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// All Employee
router.get("/emp", async (req, res, next) => {
  try {
    const employees = await employee.find();
    res.json(employees);
  } catch (err) {
    res.json(err);
  }
});

// employee details
router.get("/emp/:username", async (req, res) => {
  const empUsername = req.params.username;
  try {
    const emp = await employee.findOne({
      username: empUsername,
    });
    res.json(emp);
  } catch (error) {
    res.json(error.message);
  }
});

// UPDATE employee using PATCH method
router.patch("/emp/:username", async (req, res) => {
  const empUsername = req.params.username;
  try {
    const updatedEmployee = await employee.findOneAndUpdate(
      { username: empUsername },
      req.body,
      { new: true } // This option returns the updated document
    );
    if (updatedEmployee) {
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE employee using PUT method
router.put("/emp/:username", async (req, res) => {
  const empUsername = req.params.username;
  try {
    const updatedEmployee = await employee.findOneAndUpdate(
      { username: empUsername },
      req.body,
      { new: true } // This option returns the updated document
    );
    if (updatedEmployee) {
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE employee
router.delete("/emp/:username", async (req, res) => {
  const empUsername = req.params.username;
  try {
    const deletedEmployee = await employee.findOneAndDelete({
      username: empUsername,
    });
    if (deletedEmployee) {
      res.json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
