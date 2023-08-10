const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
  {
    user_id: {type: mongoose.Types.ObjectId, ref: "User"},
    gameId: {
      type: String,
      required: false,
      default: null,
    },
    gameName: {
      type: String,
      required: false,
      default: null,
    },
    task_id: {
      type: String,
      required: true,
      lowercase: true,
    },
    display_name: {
      type: String,
      required: true,
    },
    namespace: {
      type: String,
      required: true,
    },
    new_date: {
      type: String,
      required: true,
    },
    new_timestamp: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const GameInfo = mongoose.model("GameInfo", gameSchema);

module.exports = GameInfo;
