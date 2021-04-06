const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image: { type: String, required: true },
    description: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    gallery: { type: Schema.Types.ObjectId, ref: 'Gallery' },
    by: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Image', imageSchema);