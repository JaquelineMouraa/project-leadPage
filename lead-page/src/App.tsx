import Footer from "./components/Footer";
import { Header } from "./components/Header";
import SlideNews from "./components/SlideNews";
import SlideSystems from "./components/SlideSystems";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <SlideSystems />
      <SlideNews />
      <Footer />
      <GlobalStyle />
    </>
  );
}
