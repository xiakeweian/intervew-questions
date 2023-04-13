import React, { useState, useMemo } from 'react'
import ChildComponent from './Child'
function WuseMemo() {
  const [xiaohong, setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('志玲待客状态')
  return (
    <>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime())
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + ',志玲向我们走来了')
        }}
      >
        志玲
      </button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  )
}
export default WuseMemo
