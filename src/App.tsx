import './App.css'
import Quote from './components/Quote'
import StatusMessage from "./components/StatusMessage.tsx";
import MoreLessButton from "./components/MoreLessButton.tsx";

function App() {
    return (
        <>
            <Quote/>
            <StatusMessage/>

            <MoreLessButton/>

            Current timezone
            Day of the year
            Day of the week
            Week number
        </>
    )
}

export default App
