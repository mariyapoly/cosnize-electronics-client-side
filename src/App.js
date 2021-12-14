
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from './Pages/Aboutus/Aboutus/Aboutus';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
