import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from '../pages/Index';
import Show from '../pages/Show';


function Main(props) {
    //initializes beers state 
    const [ beers, setBeers ] = useState(null); //nullifies initial value 

    //heroku backend
    const URL = 'https://on-tap-backend.herokuapp.com/beers/';

    // const URL = 'http://localhost:4000/beers/'

    //fetch beers data from heroku backend
    const getBeers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBeers(data);
    }

    //create beers using fetch
    const createBeers = async (beer) => {
        const token = await props.user.getIdToken();
        console.log(token);
        //post request to create beers
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(beer)
        });
        //updates list of beers
        getBeers();
    };

    //update beers
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

    //delete beers
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
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index user={props.user} beers={beers} createBeers={createBeers}/>
                </Route>
                <Route path='/beers/:id' render={(rp) => {
                    if(!props.user) {
                        //show alert
                        alert('You must be logged in to access this action. Please log in to continue.');
                        return <Redirect to='/' />
                    } else {
                        return (
                            <Show  
                                {...rp} 
                                beers={beers}
                                deleteBeers={deleteBeers}
                                updateBeers={updateBeers} 
                            />
                        );
                    }

                }} />
                    
            </Switch>
        </main>
        );
}

export default Main;