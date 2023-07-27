import React, {useState} from 'react'
import {ImageExtractionServices} from '../../../services/ImageExtractionServices'
import './image_extraction.css';
import Loading from '../../../common/components/loading/loading'
import DisplayImage from '../../../common/components/displaying_image/displaying_image';

type ImageExtractionProps = {
  setState: (state: number, imageUrl: string, texts: string[]) => void
}

const ImageExtraction = (props: ImageExtractionProps) => {
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
        console.log(`Response texts: ${response.data['ocr_results']}`);

        props.setState(1, imagePath,response.data['ocr_results'])
      }
      setIsLoading(false);
      
  };

  return (
    <div className="image-extraction">
      {
        !isLoading && (
          <>
            {imagePath && <DisplayImage url={imagePath}/>}
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