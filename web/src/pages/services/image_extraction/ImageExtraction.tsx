import React, {useState} from 'react'
import {ImageExtractionServices} from '../../../services/ImageExtractionServices'
import './image_extraction.css';
import Loading from '../../../common/components/loading/loading'
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@mui/material/Button';

type ImageExtractionProps = {
  setState: (state: number, imageUrl: string, texts: string[]) => void
}

const ImageExtraction = (props: ImageExtractionProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState('');

  const handleFileChange = (files: File[]) => {
    console.log(files)
    if (files.length) {
      setSelectedFile(files[0]);
      setFileName(files[0].name);

      const imageURL = URL.createObjectURL(files[0]);
      setImagePath(imageURL);
    }
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
      setIsLoading(true);
        console.log('debug: imagePath '+ imagePath);
        const response = await ImageExtractionServices.upload(selectedFile);
        console.log(`Status code: ${response.status}`);
        console.log(`Response data: ${JSON.stringify(response.data, null, 2)}`);
        console.log(`Response texts: ${response.data['ocr_results']}`);

        props.setState(1, imagePath,response.data['ocr_results'])
      }
      setIsLoading(false);
      
  };

  return (
    <div className="image-extraction">
      {
        !isLoading && (
          <div className='image-extraction__card'>
            <DropzoneArea
              onChange={(files) => handleFileChange(files)}
            />
            {/* <input type="file" onChange={handleFileChange} /> */}
            <div>
              <Button variant="outlined" className='image-extraction__upload--btn' onClick={handleUploadClick}>Upload</Button>
            </div>
            {fileName && <p>Selected file: {fileName}</p>}
          </div>
        )
      }
      {isLoading && <Loading content='Extracting product content....'/>}
    </div>
  );
}

export default ImageExtraction;