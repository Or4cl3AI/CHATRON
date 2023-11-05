// Assuming the original file looked like this:

const mongoose = require("mongoose");
const unusedVariable = "I am not used anywhere";
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("  MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
