import { renderComponent } from '../react-dom/diff'

export default class Component {
  constructor(props) {
    this.state = {}
    this.props = props || {}
  }

  setState(changeState) {
    this.state = Object.assign(this.state, changeState)
    renderComponent(this)
  }
}
