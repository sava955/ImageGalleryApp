const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: { type: String, required: true, max: [135, 'Max number of characters is 135.'] },
    image: { type: Schema.Types.ObjectId, ref: 'Image' },
    by: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Comment', commentSchema);