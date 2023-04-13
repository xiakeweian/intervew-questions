import React, { useState, useImperativeHandle, forwardRef } from 'react'

const Child = (props, ref) => {
  console.log(props)
  const [num, setNum] = useState(0)

  useImperativeHandle(
    ref,
    () => ({
      num,
      handleClick,
    }),
    []
  )
  const handleClick = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <h3>子组件</h3>
      <p>我是通过父组件调用我的方法修改的值{num}</p>
    </div>
  )
}
export default forwardRef(Child)
