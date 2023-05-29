import { cube } from './utils'
cube(3)

// import _ from 'lodash'
// import { cube } from './math.js'

function component () {
    const element = document.createElement('div')
    //   const element = document.createElement('pre')
    // Lodash, now imported by this script
    element.innerHTML = ['Hello', 'webpack'].join(' ')
    // element.innerHTML = [
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    // ].join('\n\n')

    return element
}

document.body.appendChild(component())