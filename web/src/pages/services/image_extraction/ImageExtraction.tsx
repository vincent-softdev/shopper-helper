import React, {useState} from 'react'
import {ImageExtractionServices} from '../../../services/ImageExtractionServices'
import './image_extraction.css';
import Loading from '../../../common/components/loading/loading'

const ImageExtraction = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
        console.log('debug: imagePath '+ imagePath);
        const response = await ImageExtractionServices.upload(selectedFile);
        console.log(`Status code: ${response.status}`);
        console.log(`Response data: ${JSON.stringify(response.data, null, 2)}`);
      }
      setIsLoading(false);
  };

  return (
    <div className="image-extraction">
      {
        !isLoading && (
          <>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadClick}>Upload</button>
            {fileName && <p>Selected file: {fileName}</p>}
          </>
        )
      }
      {isLoading && <Loading content='Extracting product content....'/>}
    </div>
  );
}

export default ImageExtraction;