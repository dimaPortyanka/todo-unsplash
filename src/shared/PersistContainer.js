import { Container } from 'unstated'

class PersistContainer extends Container {
  persistanceRules = []

  persist(rules) {
    this.persistanceRules = rules

    return this.getData()
  }

  getData() {
    let res = {}

    this.persistanceRules.forEach(({
      stateKey,
      localStorageKey,
      defaultValue,
    }) => {
      res[stateKey] = JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
    })

    return res;
  }

  saveData() {
    this.persistanceRules.forEach(({
      stateKey,
      localStorageKey,
      defaultValue,
    }) => {
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(this.state[stateKey] || defaultValue)
      );
    })
  }

  setState(arg1, arg2) {
    super.setState(arg1, () => {
      this.saveData()
      if (typeof(arg2) === 'function') {
        arg2();
      }
    })
  }
}

export default PersistContainer
