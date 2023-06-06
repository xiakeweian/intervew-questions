import React, { createRef, Component } from 'react'

class Event extends Component {
  constructor(props) {
    super(props)
    this.parentRef = createRef()
    this.childRef = createRef()
  }
  componentDidMount() {
    console.log('React componentDidMount！')
    this.parentRef.current?.addEventListener('click', () => {
      console.log('原生事件：父元素 DOM 冒泡阶段！')
    })
    this.parentRef.current?.addEventListener(
      'click',
      () => {
        console.log('原生事件：父元素 DOM 捕获阶段！')
      },
      true
    )
    this.childRef.current?.addEventListener('click', () => {
      console.log('原生事件：子元素 DOM 冒泡阶段！')
    })
    this.childRef.current?.addEventListener(
      'click',
      () => {
        console.log('原生事件：子元素 DOM 捕获阶段！')
      },
      true
    )
    document.addEventListener(
      'click',
      (e) => {
        console.log('原生事件：document DOM 捕获阶段！')
      },
      true
    )
    document.addEventListener('click', (e) => {
      console.log('原生事件：document DOM 冒泡阶段！')
    })
  }
  parentClickFun = () => {
    console.log('React 事件：父元素冒泡阶段！')
  }
  childClickFun = () => {
    console.log('React 事件：子元素冒泡阶段！')
  }
  parentClickCaptureFun = () => {
    console.log('React 事件：父元素捕获阶段！')
  }
  childClickCaptureFun = () => {
    console.log('React 事件：子元素捕获阶段！')
  }
  render() {
    return (
      <div
        ref={this.parentRef}
        onClick={this.parentClickFun}
        onClickCapture={this.parentClickCaptureFun}
      >
        <div
          ref={this.childRef}
          onClick={this.childClickFun}
          onClickCapture={this.childClickCaptureFun}
        >
          分析事件执行顺序
        </div>
      </div>
    )
  }
}
export default Event
