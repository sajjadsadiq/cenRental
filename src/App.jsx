import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
