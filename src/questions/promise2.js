class Promise {
    constructor(fn) {
        this._status = 'PENDING'//promise总共有三个状态 pending，fulfilled,rejected,
        this._value
        this._reason
        this._resolves = []
        this._rejects = []

        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)

        fn(this.resolve, this.reject)
    }

    resolve (value) {
        setTimeout(() => {
            this._status = 'FULLFILLED'
            this._value = value
            this._resolves.forEach(callback => {
                this._value = callback(this._value)
            })
        }, 0)
    }

    reject (value) {
        setTimeout(() => {
            this._status = 'REJECTED'
            this._reason = value
            this._rejects.forEach(callback => {
                this._reason = callback(this._reason)
            })
        }, 0)
    }

    then (onFullfilled, onRejected) {
        return new Promise((resolve, reject) => {

            function resolver (value) {
                const ret = typeof onFullfilled === 'function'
                    ? onFullfilled(value)
                    : value

                if (ret && typeof ret.then === 'function') {

                    ret.then(
                        value => resolve(value),
                        reason => reject(reason)
                    )
                } else {
                    resolve(ret)
                }
            }

            function rejector (reason) {
                const ret = typeof onRejected === 'function'
                    ? onRejected(reason)
                    : reason
                reject(ret)
            }

            if (this._status = 'PENDING') {
                this._resolves.push(resolver)
                this._rejects.push(rejector)
            } else if (this._status === 'FULLFILLED') {
                resolver(this._value)
            } else if (this._status === 'REJECTED') {
                rejector(this._reason)
            }

        })
    }
}

Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
        var i = 0,
            result = [],
            len = promises.length,
            count = len

        function resolver (index) {
            return function (value) {
                resolveAll(index, value)
            }
        }

        function rejecter (reason) {
            reject(reason)
        }

        function resolveAll (index, value) {
            result[index] = value
            if (--count == 0) {
                resolve(result)
            }
        }

        for (i = 0; i < len; i++) {
            promises[i].then(resolver(i), rejecter)
        }
    })
}

Promise.race = function (promises) {

    return new Promise(function (resolve, reject) {
        promises.forEach(p => {
            p.then(resolve, reject)
        })
    })
}



const p = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(0)
    }, 1000)
})

const delay = (t = 1000) => v => new Promise(resolve => {
    setTimeout(() => {

        resolve(v)
    }, t)
})

function log (value) {
    console.log(value)
    return ++value
}

p().then(log).then(log).then(delay(2000)).then(log)

Promise.race([delay(1000)('delay1000'), delay(2000)('delay2000')])