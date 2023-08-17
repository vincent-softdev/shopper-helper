import { AxiosResponse } from 'axios';
import http from '../common/services/common';  // adjust the import path according to your project structure
import {APP_CONFIG} from '../configs/server'

const getImages = () => {
  return http.get("/image");
}

export const ImageServices = {
    getImages
}
