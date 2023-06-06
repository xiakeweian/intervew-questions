import React, { useState } from 'react'
import { Input } from 'antd'
import { isEmojiCharacter } from '@/utils/utils'
const TestEmo = () => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value)

        const isExistEmo = isEmojiCharacter(e.target.value)
        console.log(isExistEmo, 'kk')
        setValue(e.target.value)
    }
    return <div>
        <p>判断是否有emo表情</p>
        <Input onChange={handleChange} value={value} style={{ width: 300 }} />
    </div>
}
export default TestEmo