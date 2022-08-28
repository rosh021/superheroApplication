import FavSchema from "./FavSchema.js";

export const saveFav = (obj) => {
  return FavSchema(obj).save();
};

export const getFav = (filter) => {
  return FavSchema.findOne(filter);
};

export const getFavById = (id) => {
  return FavSchema.find(id);
};

export const updateFav = ({ filter, ...obj }) => {
  return FavSchema.findByIdAndUpdate(filter, obj, { new: true });
};

export const deleteFavBYId = (id, userId) => {
  return FavSchema.deleteMany({ _id: { $in: id }, userId });
};
