import mongoose from "mongoose";

const favSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: { type: String, required: true },
    powerstats: {
      type: Object,
    },
    appearance: { type: Object },
    biography: { type: Object },
    work: { type: Object },
    connections: { type: Object },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("favoriteSuperHero", favSchema);
