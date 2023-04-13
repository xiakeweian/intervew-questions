//  父组件向子组件传参
import React, { useState, useEffect } from 'react'
import Child from './Child'

const Parent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>父组件</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>添加</button>
      <Child count={count} />
    </div>
  )
}
export default Parent
