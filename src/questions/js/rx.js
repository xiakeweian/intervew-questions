const Rx = require('rxjs/Rx')
require('rxjs/operators')

function createIterator(iteratorable) {
  let len = iteratorable.length
  let index = 0

  return {
    next() {
      if (this.hasNext()) {
        index++
        return iteratorable[index]
      }
      return null
    },
    hasNext() {
      return index < len
    },
    remind() {
      index = 0
    },
    get current() {
      return iteratorable[index]
    },
  }
}

const iterator = createIterator([0, 1, 2, 3])

// while (iterator.current) {
//   console.log(iterator.current)
//   iterator.next();
// }

//Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
//Observer(观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
//Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
//Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
//Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
//Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

;(function fn() {
  //Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
  const observable = Rx.Observable.create((observer) => {
    try {
      observer.next(0)
      observer.next(1)

      observer.next(2)
      // throw new Error('some exception!');
    } catch (err) {
      observer.error(err)
    }
    observer.next(3)
  })

  //Observer(观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
  const observer = {
    next(value) {
      console.log(value)
    },
    error(err) {
      console.log(err)
    },
    complete() {
      console.log('complete')
    },
  }

  observable.subscribe(observer)
})

;(function fn() {
  const observable = Rx.Observable.interval(1000)
  //Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
  const subscribtion = observable.subscribe((x) => {
    console.log(x)
  })

  setTimeout(() => {
    subscribtion.unsubscribe()
  }, 2000)
})

;(function fn() {
  // Subject是一种能够发射多个数据给observer的Observable, 看起来好像是EventEmintter
  const subject = new Rx.Subject()

  subject.subscribe((x) => {
    console.log('subscribe 0:' + x)
  })
  subject.subscribe((x) => {
    console.log('subscribe 1:' + x)
  })

  subject.next('one')
  subject.next('two')

  // 与Observable不同的是, Subject发射数据给多个observer. 其次,定义subject时没有传入callback;
  // 是因为subject 它自带next ,complete ,error 等方法;从而可以发射数据给observer,
  // observer不知道数据是  Observable 还是subject给的数据;透明的;

  // 而且,subject有各种派生
  // BehaviorSubject能够保留最近的数据,使得当有subscribe的时候,立马能发射出去
  // ReplaySubject 能够保留最近的一些数据, 使得当有subscript的时候,将这些数据发射出去
  // AsyncSubject 只会发射结束前的一个数据
  // Multicasted Observables 是一种借助Subject来讲数据发射给多个observer的Observable
})

;(function fn() {
  const a$ = Rx.Observable.from([1, 3])
  const b$ = Rx.Observable.from([2, 3])
  const c$ = Rx.Observable.zip(a$, b$, (a, b) => {
    console.log(a, b)
    return a + b
  })

  c$.subscribe((x) => {
    console.log(x)
  })
})

;(function f() {
  const input = document.createElement('input')
  const button = document.createElement('button')
  button.innerHTML = 'button'
  document.body.appendChild(input)
  document.body.appendChild(button)

  const button$ = Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .pluck('target', 'innerHTML')

  button$.subscribe((x) => {
    console.log(x)
  })

  Rx.Observable.fromEvent(button, 'click')
    .throttleTime(2000)
    .map((event) => event.clientX)
    .scan((count, clientX) => count + clientX, 0)
    .subscribe((count) => console.log(count))
})()

;(function drag() {
  const dragDOM = document.getElementById('drag')
  const body = document.body

  const onMouseMove = Rx.Observable.fromEvent(dragDOM, 'mousemove')
  const onMouseDown = Rx.Observable.fromEvent(body, 'mousedown')
  const onMouseUp = Rx.Observable.fromEvent(body, 'mouseup')

  onMouseDown
    .map((evt) => onMouseMove.takeUntil(onMouseUp))
    .concatAll()
    .skip(100)
    .throttleTime(100)
    .map((evt) => {
      console.log(evt)
      return { x: evt.clientX, y: evt.clientY }
    })
    .subscribe((pos) => {
      // dragDOM.style.left = pos.x + 'px';
      // dragDOM.style.top = pos.y + 'px';
    })
})()(function name() {
  //-----------------------------------------------
  const counterAction$ = new Rx.Subject()
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return state + action.payload
      default:
        return state
    }
  }
  const counterState$ = counterAction$.scan(counterReducer, 0)
  //-----------------------------------------------
  const todoAction$ = new Rx.Subject()
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'addTodo':
        return state.concat(action.payload)
      default:
        return state
    }
  }
  const todoState$ = todoAction$
    .map((action) => {
      console.log(action)
      return action
    })
    .scan(todoReducer, [])
  //-----------------------------------------------

  const state$ = Rx.Observable.zip(counterState$, todoState$, (counter, todo) => ({
    counter,
    todo,
  }))

  todoAction$.next({ type: 'addTodo', payload: { id: '0', desc: 'first todo item' } })
  // todoAction$.next({ type: 'addTodo', payload: { id: '1', desc: 'second todo item' } });

  // counterState$.subscribe((x) => {
  //   console.log(x);
  // });
  // counterAction$.next({ type: 'add', payload: 1 });
})()

var time = Rx.Observable.of(['abc'])
var time2 = Rx.Observable.of([122, 123])
Rx.Observable.zip(time, time2, (a, b) => [...a, ...b]).subscribe((data) =>
  console.log('data:', data)
)
Rx.Observable.merge(time, time2).subscribe((data) => {
  console.log('data-M:', data)
})

const meAction$ = new Rx.Subject()
const meReducer = (state, action) => {
  console.log(action)
  return state
}

const articleAction$ = new Rx.Subject()
const articleReducer = (state, action) => {
  console.log(action)
  return state
}

const me$ = meAction$.scan(meReducer).startWith({})
const article$ = articleAction$.scan(articleReducer).startWith({})

const state$ = Rx.Observable.combineLatest(me$, article$, (me, article) => {
  return { me, article }
})

state$.subscribe((x) => {
  console.log(x)
})

articleAction$.next({ type: 'acticle' })
// meAction$.next({ type: 'me' })
