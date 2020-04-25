import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar/search-bar.component';
import ImageList from './ImageList/image-list.component';

class App extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async (searchTerm) => {

    const res = await unsplash.get('/search/photos',
    { params:
      { query: searchTerm }
    });

    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>)
  }

}

export default App;