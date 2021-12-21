import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      
      <div className="m-10 w-12/12">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="flex">
            <label className="p-2">Image Search</label>
            <input
                className="w-96 border-gray-400 rounded-xl ml-5 border p-2"
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
