import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
    //initializes beers state 
    const [ beers, setBeers ] = useState(null); //nullifies initial value 

    //heroku backend
    const URL = 'https://on-tap-backend.herokuapp.com/beers/';

    //fetch beers data from heroku backend
    const getBeers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBeers(data);
    }

    //create beers using fetch
    const createBeers = async (beer) => {
        //post request to create beers
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(beer)
        });
        //updates list of beers
        getBeers();
    };

    useEffect(() => getBeers(), []);





    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index beers={beers} createBeers={createBeers}/>
                </Route>
                <Route path='/beers/:id' render={(rp) => (
                    <Show  {...rp}/>
                )} />
                    
            </Switch>
        </main>
        );
}

export default Main;