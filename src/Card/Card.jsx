import './card.css'

export default function Card({id, url, onClick}) {
    
    return (
        <button className= "card" onClick={onClick}>
            <img src={url} alt="tamale" data-id={id}/>
        </button>
    )
}