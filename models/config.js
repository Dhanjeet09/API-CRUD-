const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.DBconnection}`)
  .then(()=>("Database connection established with server"))
  .catch((err) => console.error(err.message));

