import "./App.css";
// import LandingPage from "./components/LandingPage/LandingPage";  
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AddNewPhoto from "./components/AddNewPhoto/AddNewPhoto";
import { UserContextProvider } from "./UserContext";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import CreateArticle from "./components/Blog/CreateArticle";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addnewphoto" element={<AddNewPhoto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
          <Route path="/create-article" element={ <CreateArticle />} />
          <Route path="*" element="404 Not Found" />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
