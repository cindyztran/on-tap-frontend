

function Show({ match, beers }) {
    
    
    const loading = () => {
        return <h1>Waiting for beer to pour...</h1>
    }

    
    const loaded = () => {

        const id = match.params.id
        const beer = beers.find(b => b._id === id)
        
        return (
            <div className="show">
                <div className="show-beer">
                    <h1>{beer.name}</h1>
                    <h5>{beer.city}, {beer.state} at {beer.brewery} brewery</h5>
                    { beer.image && <img src={beer.image} alt={beer.name} />}
                    <section className="caption-box">
                        <h3 className="caption">{beer.caption}</h3>
                        <h3 className="rating">{beer.rating}</h3>
                    </section>
                </div>
            </div>
        )
    }
    return beers ? loaded() : loading();
}

export default Show;