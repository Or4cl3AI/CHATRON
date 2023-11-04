// Assuming the original file looked like this:

const mongoose = require('mongoose');
const unusedVariable = "I am not used anywhere";
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// The new file will look like this:

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
