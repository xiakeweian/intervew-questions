import React, { useState } from 'react'
import { Input } from 'antd'
import { isEmojiCharacter, isMobile, thousands } from '@/utils/utils'
const Test = () => {
    const [value, setValue] = useState('')
    const [mobile, setMobile] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value)
        const isExistEmo = isEmojiCharacter(e.target.value)
        console.log(isExstEmo, 'isExistEmo')
        setValue(e.target.value)
    }
    const handleChange1 = (e) => {
        const isTrue = isMobile(e.target.value)
        console.log(isTrue, 'isTrue')
        setMobile(e.target.value)
    }
    return <div>
        <h3>判断是否有emo表情</h3>
        <Input onChange={handleChange} value={value} style={{ width: 300 }} />
        <h3>判断手机号是否正确</h3>
        <Input onChange={handleChange1} value={mobile} style={{ width: 300 }} />
        <div>{thousands(1223443.2938)}元</div>

    </div>
}
export default Test