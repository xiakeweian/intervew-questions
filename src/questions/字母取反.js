
let str = 'AbCddsdweKdwDeweLewewKeweGfsdfJ'
function allCaps (text) {
    let newText = []
    for (var i = 0; i < text.length; i++) {
        var c = text.charAt(i)
        // console.log(c)
        if (c < 'A' || c > 'Z') {
            console.log(newText[i], 'kkkk')
            newText[i] = c.toUpperCase()
        } else {
            newText[i] = c.toLowerCase()
        }
    }
    return newText.join('')
}
allCaps(str)