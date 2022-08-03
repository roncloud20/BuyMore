const Card = ({email, name}) => {
    return(
        <div className="card">
            <img src={`https://robohash.org/id/${name}`} alt="buymore" />
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;