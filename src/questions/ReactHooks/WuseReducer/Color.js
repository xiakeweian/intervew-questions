import React, { useReducer, useContext } from 'react'
import { Button } from 'antd'
import ColorContext from './ColorContext'

const Color = () => {
  const { color, dispatch } = useContext(ColorContext)

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'UPDATE_COLOR', color: 'red' })}>红色</Button>
      <Button onClick={() => dispatch({ type: 'UPDATE_COLOR', color: 'green' })}>绿色</Button>
    </div>
  )
}

export default Color
