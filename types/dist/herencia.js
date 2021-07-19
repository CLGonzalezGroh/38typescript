"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 10,
    title: "Meetups",
    description: "Event 2021",
};
const picture = {
    id: 1,
    title: "Family",
    orientation: PhotoOrientation.Landscape,
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = "Moon";
console.log("Album", album);
console.log("Picture", picture);
console.log("NewPicture", newPicture);
