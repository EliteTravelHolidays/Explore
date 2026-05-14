import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
