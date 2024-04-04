import './App.css'
import Quote from './components/Quote'
import StatusMessage from "./components/StatusMessage.tsx";
import MoreLessButton from "./components/MoreLessButton.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Quote/>

      <StatusMessage/>

      <MoreLessButton/>
      <Footer/>
    </>
  )
}

export default App
