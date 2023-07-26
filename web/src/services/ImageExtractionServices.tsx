import { AxiosResponse } from 'axios';
import http from '../common/services/common';  // adjust the import path according to your project structure
import {APP_CONFIG} from '../configs/server'

const upload = async (file: File): Promise<AxiosResponse<any>>=> {
    // Create a new FormData instance
    const formData = new FormData();
    // Append the file to the FormData instance
    formData.append('image', file);
    
    if(APP_CONFIG.CONGIS.MODE == 'test'){
        let response;
        response = await http.post(APP_CONFIG.API_CONFIGS.API_URL_IMAGE_UPLOAD as string, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Image uploaded successfully:', response.data);
        return response
    }
    else{
        return await http.post(APP_CONFIG.API_CONFIGS.API_URL_IMAGE_UPLOAD as string, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    }
  };

const getFiles = () => {
  return http.get("/files");
}

export const ImageExtractionServices = {
  upload,
  getFiles
}
