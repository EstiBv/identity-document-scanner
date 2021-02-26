import { ICamera } from "../modelsInterface/ICamera";

export interface IImage {
  url?: ICamera | Object | String | undefined | IImage;
  img?: String | Object | ICamera | IImage;
}
