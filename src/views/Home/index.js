import React, { useState, Component } from 'react'
import { useSelector, connect, shallowEqual } from 'react-redux'
import './index.less'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      val: 0,
      number: 0,
      counter: 0,
    }
    this.resetState = this.resetState.bind(this)
  }
  // componentDidMount () {
  //   this.setState({
  //     count: 1
  //   }, () => {
  //     console.log(this.state.count) // 1
  //   })
  //   console.log(this.state.count) // 0
  // }
  // componentDidMount () {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {
  //     console.log(this.state.count) // 1
  //   })
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {
  //     console.log(this.state.count) // 1
  //   })
  // }
  // componentDidMount () {
  //   this.setState((prevState) => {
  //     console.log(prevState, 'kkk')
  //     return { count: prevState.count + 1 }
  //   }, () => {
  //     console.log(this.state.count) // 2
  //   })
  //   this.setState((prevState) => {
  //     console.log(prevState, 'kkk')
  //     return { count: prevState.count + 1 }
  //   }, () => {
  //     console.log(this.state.count) // 2
  //   })
  // }
  // componentDidMount () {
  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count) // 0
  //   setTimeout(() => {
  //     this.setState({ count: this.state.count + 1 })
  //     console.log('setTimeout: ' + this.state.count) // 1
  //   }, 0)
  //   console.log(this.state.count, '000') // 0
  // }
  // componentDidMount () {
  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count, 'react18-111') // 0
  //   setTimeout(() => {
  //     this.setState({ count: this.state.count + 1 })
  //     console.log(this.state.count, 'react18-222setTimeout: ') // 2
  //   }, 0)
  //   console.log(this.state.count, 'react18-333') // 0
  // }
  // componentDidMount () {
  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count) // 0

  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count) // 0

  //   setTimeout(() => {
  //     this.setState({ count: this.state.count + 1 })
  //     console.log(this.state.count) // 1

  //     this.setState({ count: this.state.count + 1 })
  //     console.log(this.state.count) // 1
  //   }, 0)
  // }

  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val, 'react18-1111') // 第 1 次 log 0

    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val, 'react18-2222') // 第 2 次 log 0

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val, 'react18-3333') // 第 3 次 log 1

      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val, 'react18-4444') // 第 4 次 log 1
    }, 0)
    // document.body.addEventListener('click', this.resetState, false)
    document.getElementById('btn').addEventListener('click', this.changeValue, false)
  }
  resetState() {
    console.log(this, this.state, 'ggg')
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number) // 0
  }

  // setCounter = (v) => {
  // this.setState({
  //   counter: this.state.counter + v
  // })
  // console.log('异步的counter', this.state.counter)

  // }
  setCounter = (v) => {
    this.setState(
      {
        counter: this.state.counter + v,
      },
      () => {
        console.log('同步的counter', this.state.counter)
      }
    )
    console.log('异步的counter', this.state.counter)
  }
  changeValue = () => {
    // 调用增加函数 每次counter + 1
    this.setCounter(1)
  }

  render() {
    return (
      <div>
        count:{this.state.count}
        <div className='set-state-page'>
          {/* <h2 onClick={this.changeValue}>setState page</h2> */}
          <h2 id='btn'>setState page</h2>
          {this.state.counter}
        </div>
      </div>
    )
  }
}

const Home = (props) => {
  const posts = useSelector((state) => state.posts, shallowEqual)
  const [count, setCount] = useState(0)

  const renderedPosts = posts.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
    </article>
  ))

  const handlePlus = () => {
    setCount(count + 1)
    console.log('count:', count)
    setCount(count + 1)
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
      <hr />
      <div>
        count:{count}
        <hr />
        <button onClick={handlePlus}>+1</button>
      </div>
      <hr />
      <Test />
    </section>
  )
}
export default connect(({ home }) => ({ home }))(Home)
