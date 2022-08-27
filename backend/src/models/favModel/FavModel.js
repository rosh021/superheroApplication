import FavSchema from "./FavSchema.js";

export const saveFav = (obj) => {
  console.log(obj);
  return FavSchema(obj).save();
};

export const updateFav = (filter, obj) => {
  return FavSchema.findByIdAndUpdate(filter, obj, { new: true });
};

export const getOneFav = (filter) => {
  return FavSchema.findOne(filter);
};
