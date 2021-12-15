
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from './Pages/Aboutus/Aboutus/Aboutus';
import HeaderTop from './Pages/Share/HeaderTop/HeaderTop';
import Navigation from './Pages/Share/Navigation/Navigation';
import Footer from './Pages/Share/Footer/Footer';
import LogInForm from './Pages/LogInForm/LogInForm/LogInForm';
import AuthProvider from './contexts/AuthProvider';
import CameraAllProducts from './Pages/ProductCategory/CameraAllProducts/CameraAllProducts';
import TvAllProducts from './Pages/ProductCategory/TvAllProducts/TvAllProducts';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderTop></HeaderTop>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/SignIn" element={<LogInForm />} />
          <Route path="/camera" element={<CameraAllProducts />} />
          <Route path="/television" element={<TvAllProducts />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
