import FavSchema from "./FavSchema.js";

export const saveFav = (obj) => {
  return FavSchema(obj).save();
};

export const getFav = () => {
  return FavSchema.find();
};

export const getFavById = (id) => {
  return FavSchema.findById(id);
};

export const updateFav = ({ filter, ...obj }) => {
  return FavSchema.findByIdAndUpdate(filter, obj, { new: true });
};

export const deleteFavBYId = (id) => {
  return FavSchema.deleteOne(id);
};
