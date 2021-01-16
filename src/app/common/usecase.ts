export class Usecase {
  public  title: string;
  public images: string;
  public  description: string;

  constructor(title: string, images: string,description: string) {
        this.title = title;
        this.images = images;
        this.description = description;
    }
}
