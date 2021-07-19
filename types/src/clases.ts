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

  public toString(picture: Picture) {
    return `id: ${picture.#id}, title: ${picture.#title}, orientation: ${
      picture.#orientation
    }`
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

  public addPicture(picture: Picture) {
    this.#pictures.push(picture)
  }
}

const album = new Album(1, "My Family")

const picture = new Picture(2, "My Cousin", PhotoOrientation.Landscape)

album.addPicture(picture)

//No se ven las propiedades porque privadas y encapsuladas con el simbolo #
console.log(album)
