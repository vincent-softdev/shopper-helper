import React from 'react' 
import './home_content.css'
import HomeContentServices from './services/services';

interface HomeContentProps {
    head: JSX.Element,
    body: JSX.Element
}

const HomeContent = (props: HomeContentProps) => {
    return (
        <div className="home-content__container">
            {props.head}
            {props.body}
        </div>
    )
}

export default HomeContent;