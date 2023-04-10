const mongoose = require("mongoose");
const { Schema } = mongoose;

const FollowSchema = new Schema({
    sourceUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    targetUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = FollowSchema;