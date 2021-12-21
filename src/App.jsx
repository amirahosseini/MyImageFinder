import React from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import ShowImages from './components/ShowImages';
import unsplash from './api/unsplash';

class App extends React.Component {

  state = { MyImage : [] }

  onSearchSubmit= async term => {
    let response = await unsplash.get('/search/photos',{
      params : {query :term}
    })


    this.setState( {MyImage : response.data.results} )
    console.log(this.state.MyImage)
  } 

  render() {
    return (
      <div className="w-10/12">
        <div>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div>
          <ShowImages ImagesID={this.state.MyImage}/>
        </div>
      </div>
    );
  }
}

export default App;
