import UserSchema from "./UserSchema.js";

export const createNewUser = (obj) => {
  return UserSchema(obj).save();
};

export const getUser = (val) => {
  return UserSchema.findOne(val);
};
