import React, { useEffect, useState } from 'react'

// useEeffect的闭包陷阱
function Dong() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // const timer = setInterval(() => {
    //     console.log(count, 'coming1')
    //     setCount(count + 1)
    // }, 1000)
    // return () => {
    //     console.log('清除定时器')
    //     clearInterval(timer)
    // }
  }, [count])

  return <div>guang</div>
}

export default Dong
