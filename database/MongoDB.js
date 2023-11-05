// Assuming the original file looked like this:

// Removed unused import and variable
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// The new file will look like this:

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
// Removed unused import

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
