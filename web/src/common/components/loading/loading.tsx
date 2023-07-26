import './loading.css'

const Loading = (props: {content: string}) => {
    return <>
        <div className="loading-spinner" />
        <span className='loading-content'>{props.content}</span>
    </>
}

export default Loading