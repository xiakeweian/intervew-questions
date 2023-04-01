import React from './react'
import ReactDOM from './react-dom'

function View() {
  return <div>this is View</div>
}

class Hello extends React.Component {
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  render() {
    return (
      <div className='hello'>
        <div id='text'>{this.props.text}</div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { n: 0, text: 'jack' }
  }

  componentDidMount() {
    console.log('componentDidMount')
    var t = document.getElementById('text')
    console.log(t)
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  render() {
    return (
      <div key='jki' className='container'>
        <View />
        <div>{this.state.n}</div>
        <button
          onClick={() => {
            this.setState({ n: this.state.n + 1 })
          }}
        >
          +
        </button>
        <Hello text={this.state.text} />
        <button
          onClick={() => {
            this.setState({ text: Math.random().toPrecision(3) })
          }}
        >
          change text
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
