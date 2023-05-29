import React, { Component } from 'react'
import { Button } from 'antd'

class List extends Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            list: new Array(4).fill(1).map((item, i) => item + i),
            data: new Array(5).fill(1).map((item, i) => item + i)
        }

    }
    renderItems (list) {
        console.log(this.state, 'sss')
        return list?.map((item, i) => {
            return <li key={item}>{item}</li>
        })
    }
    componentDidMount () {
        const { data } = this.state
        const a = data.map(Number)
        const b = data.forEach((item) => item + 1)
        console.log(a, b, data)
    }
    UNSAFE_componentWillReceiveProps () {
        console.log('UNSAFE_componentWillReceiveProps')
    }
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        return true
    }
    UNSAFE_componentWillUpdate () {
        console.log('UNSAFE_componentWillUpdate')

    }
    componentDidUpdate () {
        console.log('componentDidUpdate')
    }
    componentWillUnmount () {
        console.log('componentWillUnmount')
    }
    handleDelete () {

        this.setState({
            list: this.state.list.filter((item) => item !== this.state.list.length)
        })

    }
    render () {
        return <div>
            <ul>
                {this.renderItems(this.state.list)}
            </ul>
            <Button onClick={this.handleDelete}>删除最后一个</Button>

        </div>

    }
}
export default List