import DisplayImage from "../../../common/components/displaying_image/displaying_image"
import './image_label.css'

type ImageLabelProps = {
    imageUrl: string,
    texts: string[]
}

const ImageLabel = (props: ImageLabelProps) => {
    return <div className="image-label__container">
        <DisplayImage url={props.imageUrl}/>
        <section>
            <h1>Label detail</h1>
            {
                props.texts.map((e, idx) => {
                    return <div key={idx}>
                        <p>keyword: {e}</p>
                    </div>
                })
            }
            <button className="image-label__submit-btn">Submit</button>
        </section>
    </div>
}

export default ImageLabel