
import './App.css';
import Blogs from './Pages/Blog/Blogs';
import Brands from './Pages/Brands';
import Customers from './Pages/Customers';
import Details from './Pages/Details/Details';
import Home from './Pages/HomePage/Home';
import Products from './Pages/Products';
import Testimonial from './Pages/Testimonial';
import Banner from './components/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>

      <Header/>
     <Home/>
     <Banner/>
     <Details/>
     
     <Products/>
     <Customers/>
     <Testimonial/>

     <Brands/>
     <Blogs/>


     <Footer/>
    </>
  );
}

export default App;
