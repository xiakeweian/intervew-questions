import HomeList from './HomeList';
import('header/Header').then((dom) => {

    const ele = document.createElement('div');

    ele.innerHTML = HomeList(5);

    document.body.appendChild(dom.default());

    document.body.appendChild(ele);

})


