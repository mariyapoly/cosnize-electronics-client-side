
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
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails';
import PrivateRoute from './Pages/LogInForm/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Payment from './Pages/DashBoard/Payment/Payment';
import WishList from './Pages/DashBoard/WishList/WishList';
import Reviews from './Pages/DashBoard/Reviews/Reviews';
import Orders from './Pages/DashBoard/Orders/Orders';
import CheckOut from './Pages/DashBoard/CheckOut/CheckOut';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders/ManageAllOrders';
import AddHomeProduct from './Pages/DashBoard/AddHomeProduct/AddHomeProduct';
import ManageAllProducts from './Pages/DashBoard/ManageAllProducts/ManageAllProducts';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import HomeDashboard from './Pages/DashBoard/HomeDashboard/HomeDashboard';
import Shope from './Pages/Shope/Shope';
import CameraProducts from './Pages/CategoryProducts/CategoryProducts/CameraProducts';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';

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
          <Route path="/Shope" element={<Shope />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>} >
            <Route path={`/dashboard/HomeDashboard`} element={<HomeDashboard />} />
            <Route path={`/dashboard/payment`} element={<Payment />} />
            <Route path={`/dashboard/wishlist`} element={<WishList />} />
            <Route path={`/dashboard/reviews`} element={<Reviews />} />
            <Route path={`/dashboard/orders`} element={<Orders />} />
            <Route path={`/dashboard/checkOut`} element={<CheckOut />} />
            <Route path={`/dashboard/ManageAllOrders`} element={<ManageAllOrders />} />
            <Route path={`/dashboard/AddHomeProduct`} element={<AddHomeProduct />} />
            <Route path={`/dashboard/ManageAllProducts`} element={<ManageAllProducts />} />
            <Route path={`/dashboard/MakeAdmin`} element={<MakeAdmin />} />
          </Route>
          <Route path="/ProductsDetails/:id" element={<PrivateRoute><ProductsDetails /></PrivateRoute>} />
          <Route path="/CameraProducts/:id" element={<PrivateRoute><CameraProducts /></PrivateRoute>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
