import {ImageInterface} from './image.interface';

export interface IntroSlidesInterface {
  pk: string,
  sk: string,
  contentType: string,
  createdDate: string,
  updatedDate: string,
  sortOrder: string,
  dataMap: {
    num: string,
    name: string,
    content: string,
    image_upload: ImageInterface[]
  }
}
