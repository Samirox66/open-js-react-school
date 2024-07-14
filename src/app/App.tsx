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
                    <Route path="/open-js-react-school" element={<Home />} />
                    <Route
                        path="/open-js-react-school/blog"
                        element={<Blog />}
                    />
                    <Route
                        path="/open-js-react-school/blog/:id/:userId"
                        element={<BlogArticle />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToHashElement />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
