import Image from 'react-bootstrap/Image';
import './displaying_image.css'

type DisplayImageProps = {
    url: string
}

function DisplayImage(props: DisplayImageProps) {
  return <Image className='display-image--image' src={props.url} />;
}

export default DisplayImage;