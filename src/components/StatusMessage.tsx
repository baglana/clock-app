import Greeting from "./Greeting.tsx";
import Time from "./Time.tsx";
import Location from "./Location.tsx"

export default function StatusMessage() {
    return (
        <main>
            <Greeting/>
            <Time/>
            <Location/>
        </main>
    )
}