import Header from './header/Header';
import HomeContent from './home_content'

const HomePage = () => {
    return (
        <div className='home-page__container'>
            <Header />
            <HomeContent />
        </div>
    );
}

export default HomePage;