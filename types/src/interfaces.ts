// FUNCTION TO SHOW A PICTURE
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}
interface Picture {
  title: string
  date: string
  orientation: PhotoOrientation
}

function showPicture(picture: Picture): void {
  console.log(`
  title: ${picture.title}
  date: ${picture.date}
  orientation: ${picture.orientation}
  `)
}
let myPic: Picture = {
  title: "Test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Landscape,
}
showPicture(myPic)

showPicture({
  title: "Otra Peli",
  date: "2021-04",
  orientation: PhotoOrientation.Landscape,
})

interface PictureConfig {
  title?: string
  date?: string
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  let pic = { title: "Default", date: "2020-03" }
  if (config.title) {
    pic.title = config.title
  }
  if (config.date) {
    pic.date = config.date
  }
  console.log(pic)
}

generatePicture({ title: "Hola Mundo!" })
generatePicture({ title: "Hola Mundo!", date: "2021-05" })

//USER INTERFACE
interface User {
  readonly id: number
  username: string
  isPro: boolean
}

let user: User
user = { id: 10, username: "Cesar", isPro: true }
console.log("user", user)

user.username = "Maria"
// user.id = 20 //Error it is read only!
console.log("user", user)
