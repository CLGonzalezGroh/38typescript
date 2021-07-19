import { Album } from "./album"

export class User {
  private readonly id: number
  private username: string
  private firstName: string
  private isPro: boolean
  private album: Album[]

  constructor(id: number, username: string, firstName: string, isPro: boolean) {
    this.id = id
    this.username = username
    this.firstName = firstName
    this.isPro = isPro
    this.album = []
  }

  addAlbum(album: Album) {
    this.album.push(album)
  }
  removeAlbum(album: Album): Album | undefined {
    const index: number = this.album.findIndex((a) => a.id === album.id)
    let deletedAlbum
    if (index >= 0) {
      deletedAlbum = this.album[index]
      this.album.splice(index, 1)
    }
    return deletedAlbum
  }
}
