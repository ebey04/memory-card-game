import './card.css'

export default function Card({id, url}) {
    
    return (
        <div className= "card">
            <img src={url} alt="tamale" data-id={id} />
        </div>
    )
}