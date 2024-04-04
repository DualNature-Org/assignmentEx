import Navbar from "../src/Components/Navbar";
import Main from "../src/pages/Main";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import About from "../src/pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "../src/Components/Footer";
import PostReq from "./pages/PostReq";
import Worksubmit from "./pages/Worksubmit";
import Sample from "./pages/Sample";
import Editaccount from "./pages/Editaccount";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/accountedit" element={<Editaccount/>}/>
      <Route path="/sample" element={<Sample/>} />
      <Route path="/postreq" element={<PostReq/>} />
      <Route path="/postreq/academic" element={<Worksubmit type="Academic Writing"/>} />
      <Route path="/postreq/coding" element={<Worksubmit type="Coding"/>} />
      <Route path="/postreq/professional" element={<Worksubmit type="Professional Writing"/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
