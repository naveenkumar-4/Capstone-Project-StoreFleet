import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("DB is Connecting");
    const res = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb is connected with server ${res.connection.host}`);
  } catch (err) {
    console.log("mongodb connection is failed");
    console.log(err);
  }
};
