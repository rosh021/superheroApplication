import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    lName: {
      type: String,
      required: true,
      maxlength: 50,
    },

    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
