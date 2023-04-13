// memo
// useContext
// useCallback

// useImperativeHandle

// useEvent
import React from 'react'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Xianjing from './Xianjing'
import WuseContext from './WuseContext.js'
import Example5 from './Example5.js'
import WuseReducer from './WuseReducer'
import WuseMemo from './WuseMemo'
import WuseRef from './WuseRef'

const ReactHooks = () => {
  return (
    <div>
      <Example1 />
      {/* useEffect */}
      <Example2 />
      {/* useState */}
      <Example3 />
      {/* 陷阱 */}
      <Xianjing />
      {/* useContext */}
      <WuseContext />
      <Example5 />
      {/* useReducer */}
      <WuseReducer />
      {/* useMemo */}
      <WuseMemo />
      {/* useRef */}
      <WuseRef />
    </div>
  )
}
export default ReactHooks
