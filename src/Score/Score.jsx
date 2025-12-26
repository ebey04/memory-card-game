import './score.css'

export default function Score({score, streak}) {


    return(
        <div className="scoreCard">
            <p><span>Score:</span> {score}</p>
            <p><span>Highest Streak:</span> {streak}</p>
        </div>
    )
}