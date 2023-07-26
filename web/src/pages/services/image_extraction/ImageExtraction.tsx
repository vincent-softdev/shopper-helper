import React, {useState} from 'react'
import {ImageExtractionServices} from '../../../services/ImageExtractionServices'
import './image_extraction.css';
import { AxiosProgressEvent } from 'axios';

const ImageExtraction = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);

      const imageURL = URL.createObjectURL(e.target.files[0]);
      setImagePath(imageURL);
    }
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
        console.log('debug: '+ imagePath);
        await ImageExtractionServices.upload(selectedFile);
      }
  };

  return (
    <div className="image-extraction">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {uploadProgress && <progress value={uploadProgress} max="100" />}
      {fileName && <p>Selected file: {fileName}</p>}
    </div>
  );
}

export default ImageExtraction;