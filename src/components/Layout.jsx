import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
