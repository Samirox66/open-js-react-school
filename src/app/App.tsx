import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, BlogArticle, Home, NotFound } from "../pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { ScrollToHashElement } from "../atoms";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogArticle />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToHashElement />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
