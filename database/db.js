import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectToMongo = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("---***Database Connected Successfully***---");
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
};

export default connectToMongo;
