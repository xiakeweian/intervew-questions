import React, { useState } from 'react'
import { Button, Input } from 'antd'
// import './index.less';
import './index.css'
import ClassExtend from './questions/ClassExtend'
import prototype from './questions/prototype'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const createDiv = () => {
    return new Array(count).fill(1).map((item, i) => <li key={item + i} className='li-item'></li>)
  }

  return (
    <div className='app'>
      <h1>面试题</h1>
      {/* <Input defaultValue="我是App" /> */}
      {/* <Button type="primary" onClick={handleClick}>
                点击
            </Button>

            <span>有多少方块:{count}</span>
            <ul>{createDiv()}</ul>
            <div className="box"></div> */}
    </div>
  )
}
export default App
