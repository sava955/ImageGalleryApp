const Gallery = require('../models/gallery');

exports.getGalleries = (req, res) => {
    Gallery.find()
        .populate('images')
        .populate('likes')
        .populate('comments')
        .populate('by')
        .then((foundGalleries) => {
            res.status(200).json(foundGalleries);
        });
}

exports.getGallery = (req, res) => {
    const id = req.params.id;

    Gallery.findById({ _id: id })
        .populate({ path: 'images', populate: { path: 'by comments likes', populate: {path: 'by'}} })
        .populate('likes')
        .populate('comments')
        .populate('by')
        .then((foundGallery) => {
            res.status(200).json(foundGallery);
        });
}