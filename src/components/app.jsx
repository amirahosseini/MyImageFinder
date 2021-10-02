import react from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

class App extends react.Component{

    state= { myImage : [] }

    async onSearchSubmit(term) {

          let resposne = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
                Authorization :
                'Client-ID G_eKRFNJNyDLejJOb1DYw7yL94D6t76xK4sy_c-Y5Vk'
          }
        });
        this.setState({ myImage : Response.data.results })
      }

    render(){
            return ( 
                <div className="flex justify-center">  
                    <Searchbar onSubmit={this.onSearchSubmit} />
                </div>
        
             );
    }
}

export default App ;