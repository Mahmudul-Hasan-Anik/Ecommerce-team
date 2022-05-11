import {Login,Registration,Home} from './pages/page'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
       position="top-right"
       limit={1}
       autoClose={3000}
      />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
