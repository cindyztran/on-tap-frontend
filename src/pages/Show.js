import { useState, useEffect } from "react";

function Show({ match, history, beers, updateBeers, deleteBeers }) {

    const [ editForm, setEditForm ] = useState({
        name: '',
        image: '',
        caption: '',
        rating: '',
        city: '',
        state: '',
        brewery: ''
    });

    const [ beer, setBeer ] = useState(null);
    
    useEffect(() => {
        if(beers) {
            const id = match.params.id;
            const foundBeer = beers.find(b => b._id === id);
            setBeer(foundBeer);
            setEditForm(foundBeer);
        }
    }, [beers, match])
    
    const loading = () => {
        return <h1>Waiting for beer to pour...</h1>
    }

    
    const loaded = () => {

        
        return (
            <div className="show">

                <div className="show-beer">
                    <button className="show-delete" onClick={() => handleDelete(beer._id)}>Delete</button>
                    <h1 style={{color: '#004170'}}>{beer.name}</h1>

                    <h6>{beer.city}, {beer.state} at {beer.brewery} brewery</h6>

                    { beer.image && <img src={beer.image} alt={beer.name} />}

                    <section className="caption-box">

                        <h3 className="caption">{beer.caption}</h3>
                        <h3 className="rating">{beer.rating}</h3>

                    </section>

                </div>

            </div>
        )
    }

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {_id, name, image, caption, rating, city, state, brewery} = editForm;
        updateBeers({_id, name, image, caption, rating, city, state, brewery}, _id);

    }

    const handleDelete = (id) => {
        deleteBeers(id);
        history.push('/');
        
    }

    return (
      <div className="edit">
          { beer ? loaded() : loading() }
          <form onSubmit={handleSubmit}>

              <input 
                type="text" 
                name="name" 
                value={editForm.name} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="image" 
                value={editForm.image} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="caption" 
                value={editForm.caption} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="rating" 
                value={editForm.rating} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="city" 
                value={editForm.city} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="state" 
                value={editForm.state} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="brewery" 
                value={editForm.brewery} 
                onChange={handleChange} 
                /><br/>

              <button>Edit</button>

          </form>
      </div>  
    );
}

export default Show;