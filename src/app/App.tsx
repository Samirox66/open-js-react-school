import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Footer, Header } from "../organisms";
import Blog from "../pages/Blog/Blog";
import BlogArticle from "../pages/BlogArticle/BlogArticle";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogArticle />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
