import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"
import Layout from "./components/layout/Layout"
import WhatsAppButton from "./components/common/WhatsAppButton"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Testimonials from "./pages/Testimonials"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route
            path="/"
            element={(
              <Layout>
                <Home />
              </Layout>
            )}
          />
          <Route
            path="/about"
            element={(
              <Layout>
                <About />
              </Layout>
            )}
          />
          <Route
            path="/blog"
            element={(
              <Layout>
                <Blog />
              </Layout>
            )}
          />
          <Route
            path="/blog/:id"
            element={(
              <Layout>
                <BlogPost />
              </Layout>
            )}
          />
          <Route
            path="/testimonials"
            element={(
              <Layout>
                <Testimonials />
              </Layout>
            )}
          />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
