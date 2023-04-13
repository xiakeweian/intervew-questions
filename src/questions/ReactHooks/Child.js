import React from 'react'

const Child = (props) => {
  const { count = 0 } = props

  return (
    <div>
      <h3>子组件</h3>
      <p>我是父组件传过来的值{count}</p>
    </div>
  )
}
export default Child
