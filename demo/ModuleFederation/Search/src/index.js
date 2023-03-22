


Promise.all([import('header/Header'), import('home/HomeList')]).then(([{ default: header }, { default: homeList }]) => {


    const ele = document.createElement('div')
    ele.innerHTML = homeList(5)
    document.body.appendChild(header())
    document.body.appendChild(ele)

});
