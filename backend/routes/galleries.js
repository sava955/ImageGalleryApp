const express = require('express');
const router = express.Router();
const galleryCtrl = require('../controllers/galleries');

router.get('', galleryCtrl.getGalleries);

router.get('/:id', galleryCtrl.getGallery);

module.exports = router;