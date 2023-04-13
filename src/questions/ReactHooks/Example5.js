import React, { useState, useRef } from 'react'
// 父组件调用子组件的属性和方法
import Child from './Child2'

const Parent = () => {
  const ref = useRef()

  const handleClick = () => {
    const { num, handleClick } = ref.current

    console.log(num, 'sss')

    handleClick()
  }
  console.log(ref.current, 'sssjjj')
  return (
    <div>
      <p>我是通过ref获取的子组件中的值{ref?.current?.num}</p>
      <button onClick={handleClick}>我是父组件配合useRef获取子组件的属性和方法</button>
      <Child ref={ref} />
    </div>
  )
}
export default Parent
