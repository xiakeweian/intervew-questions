import React, { useMemo } from 'react'
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return name + ',小红向我们走来了'
  }

  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}
export default ChildComponent
