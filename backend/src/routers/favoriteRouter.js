import express from "express";
import { getOneFav, saveFav, updateFav } from "../models/favModel/FavModel.js";
const router = express.Router();

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

router.put("/", async (req, res, nex) => {
  try {
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

export default router;
