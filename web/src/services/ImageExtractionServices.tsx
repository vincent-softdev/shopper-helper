import http from '../common/services/common';  // adjust the import path according to your project structure
import axios, { AxiosProgressEvent } from 'axios';
import API_CONFIGS from '../configs/server'

const upload = async (file: File) => {
    // Create a new FormData instance
    const formData = new FormData();
    // Append the file to the FormData instance
    formData.append('image', file);
  
    await http.post(API_CONFIGS.API_URL_IMAGE_UPLOAD as string, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Image uploaded successfully:', response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  };

const getFiles = () => {
  return http.get("/files");
}

export const ImageExtractionServices = {
  upload,
  getFiles
}
