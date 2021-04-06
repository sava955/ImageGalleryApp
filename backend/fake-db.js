const User = require('./models/user');
const Gallery = require('./models/gallery');
const Image = require('./models/image');
const Comment = require('./models/comment');

const fakeDbData = require('./data.json');

class FakeDb {
    constructor() {
        this.users = fakeDbData.users;
        this.galleries = fakeDbData.galleries;
        this.imagesOne = fakeDbData.imagesOne;
        this.imagesTwo = fakeDbData.imagesTwo;
        this.imagesThree = fakeDbData.imagesThree;
        this.imagesFour = fakeDbData.imagesFour;
        this.imagesFive = fakeDbData.imagesFive;
        this.imagesSix = fakeDbData.imagesSix;
        this.imagesSeven = fakeDbData.imagesSeven;
        this.imagesEight = fakeDbData.imagesEight;
        this.imagesNine = fakeDbData.imagesNine;
        this.imagesTen = fakeDbData.imagesTen;
        this.comments = fakeDbData.comments;
    }

    async cleanDb() {
        await User.remove({});
        await Gallery.remove({});
        await Image.remove({});
        await Comment.remove({});
    }

    pushDataToDb() {
        const userOne = new User(this.users[0]);
        const userTwo = new User(this.users[1]);

        this.comments.forEach((comment) => {
            const newComment = new Comment(comment);
            newComment.by = userTwo;

            userTwo.comments.push(newComment);

            newComment.save();

            this.imagesOne[0].comments.push(newComment);
        });

        this.imagesOne.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[0]._id;
            newImage.likes.push(userOne);

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[0].images.push(newImage);
        });

        this.imagesTwo.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[1]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[1].images.push(newImage);
        });

        this.imagesThree.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[2]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[2].images.push(newImage);
        });

        this.imagesFour.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[3]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[3].images.push(newImage);
        });

        this.imagesFive.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[4]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[4].images.push(newImage);
        });

        this.imagesSix.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[5]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[5].images.push(newImage);
        });

        this.imagesSeven.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[6]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[6].images.push(newImage);
        });

        this.imagesEight.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[7]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[7].images.push(newImage);
        });

        this.imagesNine.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[8]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[8].images.push(newImage);
        });

        this.imagesTen.forEach((image) => {
            const newImage = new Image(image);

            newImage.by = userOne;
            newImage.gallery = this.galleries[9]._id;

            userOne.images.push(newImage);
            newImage.save();
            this.galleries[9].images.push(newImage);
        });

        this.galleries.forEach((gallery) => {
            const newGallery = new Gallery(gallery);
            newGallery.by = userOne;

            userOne.galleries.push(newGallery);

            newGallery.save();
        });

        userOne.save();
        userTwo.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = FakeDb;