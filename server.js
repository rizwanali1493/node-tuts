const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
var _ = require("lodash");
const app = express();

//-------- require files ----------
require("./repairgadgets/post");
require("./mongoose");
//_________________________________

//-------- get requests -----------
const post = mongoose.model("post_data");
//_________________________________

//---------- post data ----------
app.use(express.json());
app.use(morgan());
app.listen(3000, () => console.log("listenning on port 3000..."));

app.post("/", async (req, res) => {
  try {
    let userData = new post(
      _.pick(req.body, [
        "deviceType",
        "brand",
        "modal",
        "problems",
        "appointmentDate",
        "totalPrice",
        "name",
        "email",
        "phNo",
        "address",
        "passCode",
      ])
    );

    userData = await userData.save();
    res.send(userData);
  } catch (err) {
    const errors = err.errors;
    if (err.errors == undefined) {
      errors = {
        email: { message: "email is incorrect" },
      };
    }
    res.status(200);
    return res.json({
      status: false,
      errors: errors.email.message,
      // message: err.errmsg,
    });
    // res.status(404).send( );
    console.log("Error", err.message);
  }
});

//---------- get data from id ----------
app.get("/:getId", async (req, res) => {
  try {
    const data = await post.find({ _id: req.params.getId });
    // const data = await post.findone({ _id: req.params.getId });
    // findone use for geting 1st id matched object
    // res.json(data);   give similer result same as below
    res.send(data);
  } catch (error) {
    res.status(500);
  }
});

//---------- put data ------------
app.put("/update/:getId", async (req, res) => {
  try {
    const data = await post.findByIdAndUpdate(
      {
        _id: req.params.getId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(data);
  } catch (error) {
    res.send(500);
  }
});

//----------- delete data -------------
app.delete("/delete/:getId", async (req, res) => {
  try {
    const data = await post.findByIdAndRemove({
      _id: req.params.getId,
    });
    res.send(data);
  } catch (error) {
    req.send(500);
  }
});

//---------- get all data ----------
app.get("/", async (req, res) => {
  try {
    const todos = await post.find();
    res.json(todos);
  } catch (error) {
    res.status(500);
  }
});

app.get("/", async (req, res) => {
  res.send("welcome to live server of heroku !!!");
});
