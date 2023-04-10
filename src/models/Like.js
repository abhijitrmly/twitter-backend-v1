const mongoose = require("mongoose");
const { Schema } = mongoose;

const LikeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tweetId: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true,
    },
    // the dollowing details will be stored to avoid additional queries when like list is loaded
    userDetails: {
        name: {
            type: String,
            required: true,
        },
    },
    tweetDetails: {
        text: {
            type: String,
            required: true,
        },
        imageLinks: [{
            type: String
        }]
    }
});

module.exports = LikeSchema;