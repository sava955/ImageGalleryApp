const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    name: { type: String, required: true, max: [30, 'Too long, max is 30 characters'] },
    description: { type: String },
    by: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Gallery', gallerySchema);