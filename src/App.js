import React from 'react';
import SearchBar from './SearchBar';
import axios from'axios';
import { async } from 'q';

const printTheResultForApp = async (msg)=>{
    console.log(msg);

    const response = await axios.get('https://api.unsplash.com/search/photos',
    {
        params:{query:msg},
        headers: {
            Authorization: 'Client-ID 564337fe7636c24113ab9363c9a2b4a7404dad2dba4cc31f4fcd828d1678dc67'
        }
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