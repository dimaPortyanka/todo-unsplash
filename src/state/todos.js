import uuidv1 from 'uuid/v1';
import PersistContainer from 'shared/PersistContainer'

class Todos extends PersistContainer {
  constructor(props) {
    super(props)

    const persistedState = this.persist([{
      stateKey: 'items',
      localStorageKey: 'todos',
      defaultValue: [],
    }])

    this.state = {
      ...persistedState,
    }
  }

  select = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          done: !item.done,
          [item.done ? 'creationTime' : 'doneTime']: new Date() - 0,
        }
      })
    }))
  }

  add = ({
    title,
    text,
  }) => {
    const id = uuidv1()

    this.setState({
      items: [...this.state.items, {
        id,
        creationTime: new Date() - 0,
        title: title.trim(),
        text: text.trim(),
        done: false,
      }]
    }, () => {
      console.log('add')
    })

    return id
  }

  remove = (id) => {
    this.setState({
      items: this.state.items.filter((item) => id !== item.id),
    })
  }
}

export default Todos
