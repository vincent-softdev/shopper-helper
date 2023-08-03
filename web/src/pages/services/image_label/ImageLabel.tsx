import DisplayImage from "../../../common/components/displaying_image/displaying_image"
import './image_label.css'
import Button from '@mui/material/Button';

type ImageLabelProps = {
    imageUrl: string,
    texts: string[]
}

const ImageLabel = (props: ImageLabelProps) => {
    return <div className="image-label__container">
        <div className="image-label__display-image">
            <DisplayImage url={props.imageUrl}/>
        </div>
        <section>
            <h1>Label detail</h1>
            {
                props.texts.map((e, idx) => {
                    return <div key={idx}>
                        <p>keyword: {e}</p>
                    </div>
                })
            }
            <Button variant="outlined">Submit</Button>
        </section>
    </div>
}

export default ImageLabel