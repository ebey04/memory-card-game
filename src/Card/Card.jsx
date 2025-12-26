import './card.css'

export default function Card({id, url}) {
    
    return (
        <button className= "card">
            <img src={url} alt="tamale" data-id={id} />
        </button>
    )
}