import { Album } from "./album"
import { PhotoOrientation } from "./photo-orientation"
import { Picture } from "./picture"
import { User } from "./user"

const user = new User(1, "clgg", "Cesar", true)
const album = new Album(1, "My Family")
const album2 = new Album(2, "My Partners")
const picture = new Picture(
  1,
  "My Grandma",
  "2020-03",
  PhotoOrientation.Landscape
)

user.addAlbum(album)
user.addAlbum(album2)
album.addPicture(picture)
console.log(user)

user.removeAlbum(album)

console.log(user)
