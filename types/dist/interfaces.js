"use strict";
// FUNCTION TO SHOW A PICTURE
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`
  title: ${picture.title}
  date: ${picture.date}
  orientation: ${picture.orientation}
  `);
}
let myPic = {
    title: "Test Title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
    title: "Otra Peli",
    date: "2021-04",
    orientation: PhotoOrientation.Landscape,
});
function generatePicture(config) {
    let pic = { title: "Default", date: "2020-03" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    console.log(pic);
}
generatePicture({ title: "Hola Mundo!" });
generatePicture({ title: "Hola Mundo!", date: "2021-05" });
let user;
user = { id: 10, username: "Cesar", isPro: true };
console.log("user", user);
user.username = "Maria";
// user.id = 20 //Error it is read only!
console.log("user", user);
