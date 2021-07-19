import { Item } from "./item"
import { PhotoOrientation } from "./photo-orientation"

export class Picture extends Item {
  private orientation: PhotoOrientation
  private date: string

  constructor(
    id: number,
    title: string,
    date: string,
    orientation: PhotoOrientation
  ) {
    super(id, title)
    this.date = date
    this.orientation = orientation
  }

  public toString() {
    return `title: ${this.title}, orientation: ${this.orientation}`
  }
}
