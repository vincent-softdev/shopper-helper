import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home_page'
import NavBar from './common/components/navbar/NavBar';
import ImageExtraction from './pages/services/image_extraction/ImageExtraction';
import ServicesPage from './pages/services/services';
import ProductsPage from './pages/products/products_page';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<ServicesPage state={0} />}/>
        <Route path='/products' element={<ProductsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;