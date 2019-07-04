import React,{Component} from 'react';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './ImageList';

class App extends Component{
    constructor(){
        super();

        this.state = {imageList: []};
    }

    printTheResultForApp = async (msg)=>{
        console.log(msg);
    
        const response = await unsplash.get('/search/photos',
        {
            params:{query:msg},
            
        });
    
        console.log(response);
        this.setState({imageList: response.data.results}); 
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar fun={this.printTheResultForApp}/>
                <ImageList/>
            </div>
        );
    }
}

export default App;