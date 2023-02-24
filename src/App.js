import React, { useState } from 'react'
import { Button, Input } from 'antd'
import './index.less'

const App = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {

        setCount(count + 1)

    }

    const createDiv = () => {

        return new Array(count).fill(1).map((item, i) => <li key={item + i} className='li-item'></li>)

    }

    return <div className='app'>

        <Input defaultValue='我是App' />
        <Button type='primary' onClick={handleClick}>点击</Button>

        <span>有多少方块:{count}</span>
        <ul>{createDiv()}</ul>
    </div>

}
export default App


