import "./App.css";
import Quote from "./components/Quote";
import Clock from "./components/Clock.tsx";
import MoreLessButton from "./components/MoreLessButton.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="container">
        <Quote />
        <main>
          <Clock />
          <MoreLessButton />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
