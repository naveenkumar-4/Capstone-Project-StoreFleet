// import dotenv from "dotenv";
// dotenv.config();
// import mongoose from "mongoose";
// export const connectDB = async () => {
//   try {
//     console.log("DB is Connecting");
//     console.log(`MongoURL is ${process.env.mongoURL}`);
//     await mongoose.connect(process.env.mongoURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     // console.log(`mongodb is connected with server ${res.connection.host}`);
//   } catch (err) {
//     console.log("mongodb connection is failed");
//     console.log(err);
//   }
// };


import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("DB is Connecting");
    console.log(`MongoURL is ${process.env.mongoURL}`);
    await mongoose.connect(process.env.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected successfully");
  } catch (err) {
    console.log("MongoDB connection failed");
    console.log(err.message);
  }
};
  