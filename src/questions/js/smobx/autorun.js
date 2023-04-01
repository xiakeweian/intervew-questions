import Watcher from './watcher'

export default function autorun(cb) {
  new Watcher(cb)
}
