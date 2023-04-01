function createXHR() {
  if (XMLHttpRequest) {
    return new XMLHttpRequest()
  } else if (ActiveXObject) {
    if (arguments.callee.activeXString !== 'string') {
      var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp']
      var len = versions.length

      for (var i = 0; i < len; i++) {
        try {
          new ActiveXObject(versions[i])
          arguments.callee.activeXString = versions[i]
          break
        } catch (e) {}
      }
    }

    return new ActiveXObject(arguments.callee.activeXString)
  } else {
    throw new Error('no XHR object available')
  }
}

var ajax = {
  GET(url) {
    var xhr = createXHR()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText)
        }
      }
    }
    xhr.open('get', url, true)
    xhr.send(null)
  },
}

export default ajax

function jsonp() {
  var script = null
  var callbackname = 'fetchJSON_comment98vv15368'
  var url =
    'https://sclub.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98vv15368&productId=3828405&score=0&sortType=5&page=1&pageSize=10&isShadowSku=0&rid=0&fold=1'

  window[callbackname] = function (data) {
    console.log(data)
    document.body.removeChild(script)
    window[callbackname] = null
    script = null
  }
  script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

jsonp()
