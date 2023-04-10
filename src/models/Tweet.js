const mongoose = require("mongoose");
const { Schema } = mongoose;

// @TODO add URL shortener
const TweetSchema = new Schema(
  {
    userId: {
        type: Schema.types.ObjectId,
        ref: 'User'
    },
    text: {
      type: String,
      maxLength: 280,
      immutable: true
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    links: {
      images: {
        type: [
          {
            type: String,
            required: true,
          },
        ],
        validate: [arrayLimit, "{PATH} exceeds the limit of 3"],
      },
    },
    isReply: {
        type: Boolean,
        default: false,
    },
    parentTweet: {
        type: Schema.types.ObjectId,
        ref: 'Tweet',
    }
  },
  {
    timestamps: true,
  }
);

// limit images to 3
function arrayLimit(val) {
  return val.length <= 3;
}

module.exports = mongoose.model("Tweet", TweetSchema);
