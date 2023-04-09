import { useState, useEffect } from "react";

function Show({ match, history, beers, id, updateBeers, deleteBeers }) {
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
            const foundBeer = beers.find(b => b._id === id);
            setBeer(foundBeer);
            setEditForm(foundBeer);
        }
    }, [beers, id])
    
    const loading = () => {
        return <h1>Waiting for beer to pour...</h1>
    }

    
    const loaded = () => {
      const { name, brewery, image, city, state, caption, rating } = beer;
        
        return (
            <div className="show">

                <div className="show-beer">
                    <button className="show-delete" onClick={() => handleDelete(id)}>Delete</button>
                    <h1 style={{color: '#004170'}}>{name}</h1>

                    <h6>{city}, {state} at {brewery} brewery</h6>

                    { image && <img src={image} alt={name} />}

                    <section className="caption-box">

                        <h3 className="caption">{caption}</h3>
                        <h3 className="rating">{rating}</h3>

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
        const {name, image, caption, rating, city, state, brewery} = editForm;
        updateBeers({id, name, image, caption, rating, city, state, brewery}, id);

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
                value={editForm?.name} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="image" 
                value={editForm?.image} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="caption" 
                value={editForm?.caption} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="rating" 
                value={editForm?.rating} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="city" 
                value={editForm?.city} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="state" 
                value={editForm?.state} 
                onChange={handleChange} 
                />

              <input 
                type="text" 
                name="brewery" 
                value={editForm?.brewery} 
                onChange={handleChange} 
                /><br/>

              <button>Edit</button>

          </form>
      </div>  
    );
}

export default Show;