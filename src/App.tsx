import Header from "./public/components/Header";
import Footer from "./public/components/Footer";
import "./App.scss";

// Deine Seiten-Komponenten hier importieren
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import MusicPage from "./pages/MusicPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        {/* Deine Seiten-Komponenten werden hier eingefügt */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
