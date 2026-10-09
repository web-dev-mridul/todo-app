const mongoose = require("mongoose");
const database = async () => {
  try {
    await mongoose.connect(
      "mongodb://mridulHasan:1234@ac-24ea4yr-shard-00-00.pafjdek.mongodb.net:27017,ac-24ea4yr-shard-00-01.pafjdek.mongodb.net:27017,ac-24ea4yr-shard-00-02.pafjdek.mongodb.net:27017/?ssl=true&replicaSet=atlas-hfscop-shard-0&authSource=admin&appName=database",
    );
    console.log("mongoDB is connected I don't know how :)");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = database;
