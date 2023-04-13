import React, { useReducer } from 'react'
import ColorContext from './ColorContext'
import Color from './Color'

const WuseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_COLOR':
        return action.color
      default:
        return state
    }
  }

  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <div>
      修改颜色的组件
      <div
        style={{
          backgroundColor: color,
          color: 'white',
          width: 200,
          height: 200,
          textAlign: 'center',
          lineHeight: 12,
          margin: 20,
        }}
      >
        文字背景的颜色
      </div>
      <ColorContext.Provider value={{ color, dispatch }}>
        <Color />
      </ColorContext.Provider>
    </div>
  )
}

export default WuseReducer
