function chainD () {
    var ctx = this;
    var args = [].slice.call(arguments);

    return function fn () { }
    var innerArgs = [].slice.call(arguments);
    var ctor = arguments[0];

    if (typeof ctor === 'function') {
        console.log(args)
        console.log(ctor)


    } else {
        args = args.concat(innerArgs);
        return fn;
    }
}



@chainD({}, {}, {})({
    a: 1
})(1)
class A {

    
}