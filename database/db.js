import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect('mongodb+srv://krishan7877:7877@mongodb.snwfo.mongodb.net/enotebook');
    console.log("---***Database Connected Successfully***---")
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;