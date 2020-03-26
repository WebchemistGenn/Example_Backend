import mongoose from "mongoose";

const db = mongoose.connection;

db.on("error", console.error);
db.once("open", function() {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb+srv://development:20123@webchemisttest-sl1jl.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
