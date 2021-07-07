import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import './App.css';

//import components
import Header from './components/Header';
import Main from './components/Main';

function App() {

  //user state
  const [ user, setUser ] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });
    
    return () => unsubscribe(); //clean up effect
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
      
    </div>
  );
}

export default App;
