export interface ICamera {
  image: string;
  CanvasRenderingContext2D: Object;
  prototype: ImageData;
  imageData: Array<[]>;
  data: String;
  width: number;
  heigth: number;
  urlCamera: String | Object | CanvasRenderingContext2D;
  url: String;
  img: String | Object | ICamera;
}
