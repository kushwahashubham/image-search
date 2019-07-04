import React from 'react';
import SearchBar from './SearchBar';

const printTheResultForApp =(msg)=>{
    console.log(msg);
}

const App = ()=>{
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar fun={printTheResultForApp}/>
        </div>
    );
}

export default App;