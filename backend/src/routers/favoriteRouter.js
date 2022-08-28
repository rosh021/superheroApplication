import express from "express";
import {
  getFav,
  getFavById,
  saveFav,
  updateFavById,
  deleteFavBYId,
} from "../models/favModel/FavModel.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const filter = { userId: authorization };
    const result = await getFavById(filter);
    console.log(result);

    res.json({
      status: "success",
      message: "Here are Favorite List",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await saveFav(req.body);

    if (result?.id) {
      return res.json({
        status: "success",
        message: "Saved as Favorite",
      });
    }

    res.json({
      status: "error",
      message: "Cannot Added as favorite",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { _id, ...powerstats } = req.body;

    if (_id) {
      const updateFav = await updateFavById(_id, powerstats);
      if (updateFav?.id) {
        return res.json({
          status: "success",
          message: "Your Favorite has been updated",
        });
      }
    }

    res.json({
      status: "error",
      message: "Unable to update Favorite, Please try again later",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  console.log(req.params);
  try {
    const result = await deleteFavBYId(id);

    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Selected superhero has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "unable to delete your superhero",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
