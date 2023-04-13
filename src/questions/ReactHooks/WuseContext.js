import React, { useState, useContext, createContext } from 'react'
// import Child from './Child'
const CountContext = createContext()
// 父组件向子组件传参

const Child = () => {
  const data = useContext(CountContext)
  console.log(data)
  return (
    <div>
      <h3>我是createContext的子组件</h3>
      <p>计数：{data}</p>
    </div>
  )
}
const WuseContext = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>我是createContext的添加</button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </div>
  )
}
export default WuseContext
