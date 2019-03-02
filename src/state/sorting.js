import { Container } from 'unstated'

class sorting extends Container {
  state = {
    ask: true,
    field: '',
  };

  setOrder(ask) {
    this.setState({ ask })
  }

  setField(field) {
    this.setState({
      field,
      ask: true,
    })
  }
}

export default sorting
