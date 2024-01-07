import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
