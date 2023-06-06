import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import homeReducer, {
  initState,
  incremented,
  decremented,
  incrementByAmount,
} from '@/reducers/homeReducer'
import { Button, Input } from 'antd'
import List from './List'
import TestEmo from '../TestEmo'
import './index.less'

let i = 0
const ViewApp = () => {
  const posts = useSelector((state) => state.posts)
  const { value } = useSelector((state) => state.home)

  const [list, setList] = useState([])

  // useEffect(() => {
  //   fetch('/api').then((res) => res.text()).then(data => {
  //     console.log(data, 'sss')
  //     alert(data)
  //   })
  // }, [])

  // const [count, setCount] = useState(value)
  const dispatch = useDispatch()

  const add = () => {
    setList(
      list.concat(
        <button key={i} onClick={add}>
          {i++}
        </button>
      )
    )
    // setList(btnList => list.concat(<button key={i} onClick={add}>{i++}</button>))
  }

  const handleClick = (num) => {
    if (num === 1) {
      dispatch(incremented())
    } else if (num === -1) {
      dispatch(decremented())
    } else {
      dispatch(incrementByAmount(num))
    }
  }

  return (
    <div className='App'>
      <button onClick={add}>Add</button>
      {list.map((val) => val)}

      <div>{value}</div>
      <Button onClick={() => handleClick(2)} plus='2'>
        加2
      </Button>
      <Button onClick={() => handleClick(1)} plus='1'>
        加1
      </Button>
      <Button onClick={() => handleClick(-1)} plus='-1'>
        减1
      </Button>

      <div className='img'></div>

      <div className='container'>
        <div className='cube'></div>
      </div>
      <List />
      <TestEmo />
    </div>
  )
}
export default ViewApp
