import express from "express";
import {
  getFav,
  getFavById,
  saveFav,
  updateFav,
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
    const { id, ...rest } = req.body;

    const favSuperHero = await getOneFav({ id });

    if (favSuperHero?.id) {
      const filter = { id: favSuperHero.id };
      const updateFav = await updateFav(filter, rest);
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

router.delete("/", async (req, res, next) => {
  try {
    const id = req.body;
    console.log(id);

    const { authorization } = req.headers;
    console.log(authorization);

    const result = await deleteFavBYId(id, authorization);

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
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
