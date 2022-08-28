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

export const updateFavById = (_id, powerstats) => {
  return FavSchema.findByIdAndUpdate(_id, { powerstats }, { new: true });
};

export const deleteFavBYId = ({ id }) => {
  return FavSchema.deleteOne(id);
};
