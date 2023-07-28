import ImageExtraction from "./image_extraction/ImageExtraction"
import ImageLabel from "./image_label/ImageLabel"
import React from 'react'

enum ServicesState {
    ImageExtraction,
    ImageLabelling
}

type ServicesPageProps = {
    state: ServicesState
}

const ServicesPage = (props: ServicesPageProps) => {
    const [state, setState] = React.useState(props.state)
    const [imageLabelDetail, setImageLabelDetail] = React.useState<{imageUrl: string, texts: string[]}>()

    return <>
    {
        state == ServicesState.ImageExtraction && <ImageExtraction setState={(state, imageUrl, texts) => {
            setState(state)
            setImageLabelDetail({imageUrl: imageUrl,texts: texts})
        }}/>
    }
    {
        state == ServicesState.ImageLabelling && <ImageLabel imageUrl={imageLabelDetail?.imageUrl as string} texts={imageLabelDetail?.texts as string[]}/>
    }
    </>
}

export default ServicesPage