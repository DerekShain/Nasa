export class SpacePic {
  constructor(data) {
    this.author = data.copyright
    this.date = data.date
    this.description = data.explanation
    this.img = data.hdurl || data.url
    this.title = data.title
    this.url = data.url
  }
}
