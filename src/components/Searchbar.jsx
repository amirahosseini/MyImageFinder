import react from "react";

class Searchbar extends react.Component{

    state = {isearch : ''}

    onFormSubmit = event =>{

        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render (){
        return (
            <div className="w-8/12 mt-20 ">
                <form action="" onSubmit={this.onFormSubmit}>
                    <label htmlFor="" className="text-xl p-5"> search  </label>
                    <input
                    type="text" 
                    value={this.state.isearch}
                    onChange={(e) => this.setState( { isearch : e.target.value} ) } 
                    className="w-10/12 border-2 border-gray-500 rounded-xl h-14"
                    />
                </form> 
            </div>
        );
    }
}

export default Searchbar;