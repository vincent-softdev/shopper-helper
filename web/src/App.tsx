import './App.css';
import Header from './common/components/header'
import Footer from './common/components/footer'
import HomePage from './pages/home/home_page';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;