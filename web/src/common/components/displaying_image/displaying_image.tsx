import Image from 'react-bootstrap/Image';

type DisplayImageProps = {
    url: string
}

function DisplayImage(props: DisplayImageProps) {
  return <Image src={props.url} />;
}

export default DisplayImage;