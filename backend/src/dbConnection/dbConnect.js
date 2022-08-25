import mongoose from "mongoose";

const databaseConnection = () => {
  try {
    const connStr = process.env.MONGO_URL;
    const connect = mongoose.connect(connStr);

    connect && console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnection;
