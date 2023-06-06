import React, { useState } from 'react'
import { Input } from 'antd'
import { isEmojiCharacter, isMobile } from '@/utils/utils'
const Test = () => {
    const [value, setValue] = useState('')
    const [mobile, setMobile] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value)
        const isExistEmo = isEmojiCharacter(e.target.value)
        console.log(isExistEmo, 'kk')
        setValue(e.target.value)
    }
    const handleChange1 = (e) => {
        const isTrue = isMobile(e.target.value)
        console.log(isTrue, 'kk')
        setMobile(e.target.value)
    }
    return <div>
        <p>判断是否有emo表情</p>
        <Input onChange={handleChange} value={value} style={{ width: 300 }} />
        <h3>判断手机号是否正确</h3>
        <Input onChange={handleChange1} value={mobile} style={{ width: 300 }} />

    </div>
}
export default Test