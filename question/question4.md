## koa-body和koa-bodyparser区别
### koa-body
可以处理如下请求：
- multipart/form-data
- application/x-www-form-urlencoded
- application/json
- application/json-patch+json
- application/vnd.api+json
- application/csp-report
- text/xml
用于修补node/koa
支持文件上传
body体，字段和文件大小限制
body, fields and files size limiting

jsonLimit json主体的限制, 默认为1mb
formLimit form body, 默认为56kb
textLimit text body, 默认为56kb
encoding form fields, 默认 utf-8
multipart 默认为false,设置为true的时候可以解析multipart body
urlencoded {Boolean} Parse urlencoded bodies, default true
text {Boolean} 默认支持text,例如：XML
json {Boolean} 默认支持json
jsonStrict {Boolean} 切换body严格模式;如果设置为true，只能接受array和 object,默认是true 


不仅可以修改文件的后缀名，同时也可以去控制其图片大小以及修改上传的图片名称
```js
app.use(body({
    multipart: true,//默认是false,上传文件的话要设置为true
    formidable:{
        // 上传存放的路劲
        uploadDir: path.join(__dirname,'./upload'),
        // 保持后缀名\
        keepExtensions: true,
        // 文件大小
        // maxFileSize: 5000,
        onFileBegin: (name, file) => {
            // 获取后缀, 如: .js  .txt
            const reg = /\.[A-Za-z]+$/g
            const ext = file.name.match(reg)[0]
            
            //修改上传文件名
            file.path = path.join(__dirname,"./upload/") + Date.now() + ext;
        },
        onError(err){
            console.log(err)
        }
    }
})); 
```
### koa-bodyparser:
支持json/form/text/xml，默认为['json'，'form']
formLimit：URL编码的正文的限制。如果主体最终大于此限制，则返回413错误代码。默认值为56kb。
jsonLimit：json主体的限制。默认值为1mb。
text限制：文本正文的限制。默认值为1mb。
xmlLimit：xml主体的限制。默认值为1mb。
strict：当设置为true时，JSON解析器将只接受数组和对象。默认值为true。参见联合体中的严格模式。在严格模式下，ctx.request.body将始终是一个对象（或数组），这样可以避免大量的类型判断。但文本正文将始终返回字符串类型。
detectJSON：自定义json请求检测函数。默认值为null。
使用koa-parser时，如果想支持上传文件可以和koa-multer中间件结合使用

区别：
1. 可处理的请求参数范围koa-body要大于koa-bodyparser。koa-body能支持json/form/上传文件/text/xml,koa-bodyparser支持json/form/text/xml
2. 参数都有大小限制，但是限制大小不同
3. koa-boddyparser中间件不会解析multipart body,由于这种消息体很复杂而且也很大。koa-body可以解析multipart body
## koa-static和koa-static-cache区别