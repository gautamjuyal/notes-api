const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, {}).then((err) => {
  console.log("connected to db");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
