import "./App.css";
import Quote from "./components/Quote";
import Clock from "./components/Clock.tsx";
import MoreButton from "./components/MoreButton.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="container">
        <Quote />
        <main>
          <Clock />
          <MoreButton />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
