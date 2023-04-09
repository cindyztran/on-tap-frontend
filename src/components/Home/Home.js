import { useState, useEffect } from "react";
import Index from '../../pages/Index';
// import Show from "../../pages/Show"
const Home = (props) => {
    const [ beers, setBeers ] = useState(null); 

    // // const URL = 'https://on-tap-backend.herokuapp.com/beers/';

    const URL = 'http://localhost:4000/beers'

    const getBeers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBeers(data);
    }

    const createBeers = async (beer) => {
        const token = await props.user.getIdToken();
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(beer)
        });
        getBeers();
    };

    // //update beers
    const updateBeers = async (beer, id) => {
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(beer)
        });
        getBeers();
    }

    // //delete beers
    const deleteBeers = async (id) => {
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        getBeers();
    }

    useEffect(() => getBeers(), []);
    
    return (
        <div>
            <Index match={props.match} history={props.history} user={props.isAuthenticated} beers={beers} createBeers={createBeers} deleteBeers={deleteBeers} updateBeers={updateBeers}/>
        </div>
        );
}

export default Home;