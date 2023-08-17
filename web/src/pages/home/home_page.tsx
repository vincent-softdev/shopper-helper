import Header from './header/Header';
import HomeContent from './home_content'
import HomeContentServices from './services/services';
import HomeContentTitle from './title/title';

const HomePage = () => {
    return (
        <div className='home-page__container'>
            <Header />
            <HomeContent head={<HomeContentTitle />} body={<HomeContentServices />}/>
        </div>
    );
}

export default HomePage;