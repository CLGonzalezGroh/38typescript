export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

//SUPERCLASS
abstract class Item {
  #id: number
  #title: string

  constructor(id: number, title: string) {
    this.#id = id
    this.#title = title
  }
  get id() {
    return this.#id
  }
  get title() {
    return this.#title
  }
  set title(title: string) {
    this.#title = title
  }
}

class Picture extends Item {
  #orientation: PhotoOrientation
  static photoOrientation = PhotoOrientation

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title)
    this.#orientation = orientation
  }

  get orientation() {
    return this.#orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this.#orientation = orientation
  }

  public toString() {
    return `id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}`
  }
}

class Album extends Item {
  #pictures: Picture[]

  constructor(id: number, title: string) {
    super(id, title)
    this.#pictures = []
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture)
  }
}

const album = new Album(1, "My Family")

const picture = new Picture(2, "My Cousin", PhotoOrientation.Landscape)
album.addPicture(picture)

console.log(picture)
console.log(picture.title, picture.orientation)
picture.title = "My Grandma"
console.log(picture.title, picture.orientation)
console.log(picture.toString())

const albumId = album.id
const pictureId = picture.id

// const item = new Item(1, "hola") // No se puede porque es una clase abstracta

console.log(Picture.photoOrientation.Panorama)
