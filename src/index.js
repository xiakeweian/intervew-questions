import _ from 'lodash'
import imgSrc from '../public/images/7.jpeg'
import imgSrc2 from '../public/images/robot.svg'
import exampleTxt from '../public/example.txt'
import imgSrc3 from '../public/images/1.webp'
import './index.css'
import './index.less'
import csvData from '../public/data/student.csv'
import xmlData from '../public/data/student.xml'
import toml from '../public/data/data.toml'
import yaml from '../public/data/data.yaml'
import json from '../public/data/data.json5'
import HelloWorld from './HelloWorld.js'
import printMe from './print.js';
function component () {
    const element = document.createElement('div');
    const img = document.createElement('img')
    const img2 = document.createElement('img')
    img.style.cssText = 'width:300px;height:500px;display:block;'
    img.src = imgSrc

    img2.src = imgSrc2
    const p = document.createElement('p')
    p.innerHTML = _.join(['hello', 'webpack', '!'])
    element.appendChild(p)

    const txtDom = document.createElement('p')
    txtDom.style.cssText = 'width:200px;height:200px;background:skyblue';
    txtDom.textContent = exampleTxt;
    const img3 = document.createElement('img');
    img3.style.cssText = 'width:300px;height:400px;display:block;'
    img3.src = imgSrc3

    const listDom = document.createElement('div');
    listDom.classList.add('list-img')

    const spanDom = document.createElement('span')
    spanDom.classList.add('font');
    spanDom.innerHTML = '我是真的喜欢你的BMW,Campaign Center'

    console.log(csvData, 'csvData')
    console.log(xmlData, 'xmlData')
    console.log(toml.title); // output `TOML Example`
    console.log(toml.owner.name); // output `Tom Preston-Werner`

    console.log(yaml.title); // output `YAML Example`
    console.log(yaml.owner.name); // output `Tom Preston-Werner`

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`

    HelloWorld()


    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.appendChild(img)
    element.appendChild(img2)
    element.appendChild(img3)
    element.appendChild(txtDom)
    element.appendChild(listDom)
    element.appendChild(spanDom)


    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());
// const divDom = document.createElement('div')
// divDom.style.cssText = 'width:200px;height:200px;background:orange;'
// document.body.appendChild(divDom)

