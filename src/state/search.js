import { Container } from 'unstated'

class Search extends Container {
  state = {
    searchPhrase: '',
  };

  setSearchPhrase = (searchPhrase) => {
    this.setState({ searchPhrase })
  }
}

export default Search
