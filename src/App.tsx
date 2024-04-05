import "./App.css";
import Quote from "./components/Quote";
import StatusMessage from "./components/StatusMessage.tsx";
import MoreLessButton from "./components/MoreLessButton.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="container">
        <Quote />
        <main>
          <StatusMessage />
          <MoreLessButton />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
