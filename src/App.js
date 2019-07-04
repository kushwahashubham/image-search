import React from 'react';
import SearchBar from './SearchBar';
import { async } from 'q';
import unsplash from './api/unsplash';

const printTheResultForApp = async (msg)=>{
    console.log(msg);

    const response = await unsplash.get('/search/photos',
    {
        params:{query:msg},
        
    });

    console.log(response)
}

const App = ()=>{
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar fun={printTheResultForApp}/>
        </div>
    );
}

export default App;