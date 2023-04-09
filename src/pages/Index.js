import { useState } from "react";
import Show from "./Show";

const Index = (props) => {
    const [ newForm, setNewForm ] = useState({
        name: '',
        image: '',
        caption: '',
        rating: '',
        city: '',
        state: '',
        brewery: ''
    });

    const [show, setShow] = useState(false)
    const [id, setId] = useState('')

    const handleChange = (event) => {
        //dynamically selects value in state and set to target element's value is
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!props.user) {
            alert('You must be logged in to access this action.');
            return; // exit the function
        }

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
    const { beers, deleteBeers, updateBeers, match, history} = props;

    const loaded = () => {
        if (show) {
            return (
            <Show match={match} history={history} beers={beers} id={id} deleteBeers={deleteBeers}
            updateBeers={updateBeers} />)
        }


        return (
            props.beers.map((beer) => (
            <div key={beer._id} className='beer'>
                <div className="index-beer">
                <h1  onClick={() => {setShow(true); setId(beer._id)}} style={{color: '#004170'}}>{beer.name}</h1>
                <h5>{beer.brewery} brewery in {beer.city}, {beer.state} </h5>
                { beer.image && <img src={beer.image} alt={beer.name} />}
                <section className="caption-box">
                    <h3 className="caption">{beer.caption}</h3>
                    <h3 className="rating">{beer.rating} / 10</h3>
                </section>
                </div>
            </div>
        ))
    )};

    const loading = () => {
        return <h1>Waiting for beer to pour...</h1>
    };

    return (
        <section>
            <form className="index-input" onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={newForm.name} placeholder="name" />
                <input type="text" name="image" onChange={handleChange} value={newForm.image} placeholder="image" />
                <input type="text" name="caption" onChange={handleChange} value={newForm.caption} placeholder="caption" />
                <input type="number" name="rating" onChange={handleChange} value={newForm.rating} placeholder="rating" />
                <input type="text" name="city" onChange={handleChange} value={newForm.city} placeholder="city" />
                <input type="text" name="state" onChange={handleChange} value={newForm.state} placeholder="state" />
                <input type="text" name="brewery" onChange={handleChange} value={newForm.brewery} placeholder="brewery" /><br/>
                <button 
                    type="submit" 
                    disabled={!props.user}>Submit</button>
            </form>
            { props.beers ? loaded() : loading() }
        </section>
    )
}

export default Index;