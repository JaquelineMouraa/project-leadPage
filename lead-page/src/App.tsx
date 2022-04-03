import { GlobalStyle } from "./styles/global";
import { Home } from "../src/pages/Home"
import Footer from "./components/Footer";

export function App() {
  return (
    <>
       <Home />
       <Footer />
      <GlobalStyle />
    </>
  );
}
