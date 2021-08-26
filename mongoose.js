const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTURI_Live, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect To mongoDB...."))
  .catch((err) => console.error("could not connect to mongo", err));

//   const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.CONNECTURI_Live, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connect To mongoDB...."))
//   .catch((err) => console.error("could not connect to mongo", err));
//   const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.CONNECTURI_Live, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connect To mongoDB...."))
//   .catch((err) => console.error("could not connect to mongo", err));
//   .connect(process.env.CONNECTURI_Live, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connect To mongoDB...."))
//   .catch((err) => console.error("could not connect to mongo", err));
