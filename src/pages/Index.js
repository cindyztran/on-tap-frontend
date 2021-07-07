import { Link } from 'react-router-dom';

function Index(props) {

    const loaded = () => {
        return props.beers.map((beer) => (
            <div key={beer._id} className='beer'>
                <Link to={`/beers/${beer._id}`}>
                    <h1>{beer.name}</h1>
                </Link>
                { beer.image && <img src={beer.image} alt={beer.name} />}
                <section>
                    <h3>{beer.caption}</h3>
                    <h3>{beer.rating}</h3>
                    <h4>{beer.city}, {beer.state} at {beer.brewery} brewery</h4>

                </section>
            </div>
        ));

    };

    const loading = () => {
        return <h1>Waiting for beer to pour...</h1>
    };

    return props.beers ? loaded() : loading();
}

export default Index;