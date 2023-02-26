import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const option = { useNewUrlParser: "true", useUnifiedTopology: "true" };

export const db = () => {
  mongoose
    .set("strictQuery", false)
    .connect(DB_URI, option)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error", err));
};

//run DB
db();
