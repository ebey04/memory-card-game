import './message.css'

export default function Message({streak, showMessage}) {

    return (
        <div className= {`message ${showMessage ? '' : 'hidden'}`} aria-live= "assertive">
            Oh no! You clicked that tamale already. Highest streak is {streak} tamales.
        </div>
    )
}