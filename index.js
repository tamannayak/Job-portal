const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const morgan = require("morgan");
 const bodyParser = require("body-parser");
 require("dotenv").config();
 var cors = require('cors');

 //dtabase connection
 mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,

 }) .then(() => console.log("DB connected"))
 .catch((err) => console.log(err));

 const PORT=process.env.PORT || 9000

 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });