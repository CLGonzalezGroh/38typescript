export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  #id: number
  #title: string
  #orientation: PhotoOrientation

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id
    this.#title = title
    this.#orientation = orientation
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
  get orientation() {
    return this.#orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this.#orientation = orientation
  }

  public toString() {
    return `title: ${this.title}, orientation: ${this.orientation}`
  }
}

class Album {
  #id: number
  #title: string
  #pictures: Picture[]

  constructor(id: number, title: string) {
    this.#id = id
    this.#title = title
    this.#pictures = []
  }

  get id() {
    return this.#id
  }
  get title() {
    return this.#title
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
