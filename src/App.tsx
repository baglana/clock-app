import './App.css'
import Quote from './components/Quote'
import StatusMessage from "./components/StatusMessage.tsx";
import MoreLessButton from "./components/MoreLessButton.tsx";
import MoreInfo from "./components/MoreInfo.tsx";

function App() {
    return (
        <>
            <Quote/>
            
            <StatusMessage/>

            <MoreLessButton/>
            <MoreInfo/>
        </>
    )
}

export default App
