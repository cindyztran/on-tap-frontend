import { useState } from "react";
import { Link } from 'react-router-dom';

function Index(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        image: '',
        caption: '',
        rating: '',
        city: '',
        state: '',
        brewery: ''
    });
    
    const handleChange = (event) => {
        //dynamically selects value in state and set to target element's value is
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createBeers(newForm);
        setNewForm({
            name: '',
            image: '',
            caption: '',
            rating: '',
            city: '',
            state: '',
            brewery: ''
        });
    }

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

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={newForm.name} placeholder="name" />
                <input type="text" name="image" onChange={handleChange} value={newForm.image} placeholder="image" />
                <input type="text" name="caption" onChange={handleChange} value={newForm.caption} placeholder="caption" />
                <input type="number" name="rating" onChange={handleChange} value={newForm.rating} placeholder="rating" />
                <input type="text" name="city" onChange={handleChange} value={newForm.city} placeholder="city" />
                <input type="text" name="state" onChange={handleChange} value={newForm.state} placeholder="state" />
                <input type="text" name="brewery" onChange={handleChange} value={newForm.brewery} placeholder="brewery" />
                <input type="submit" value="submit" />
            </form>
            { props.beers ? loaded() : loading() }
        </section>
    )
}

export default Index;