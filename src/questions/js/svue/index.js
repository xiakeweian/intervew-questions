import Vue from './mvvm'
const names = ['Andy', 'Lucy', 'Evan', 'Peter']

const vue = new Vue({
  el: '#app',
  data: {
    name: 'xiaoming',
  },
  methods: {
    onclick() {
      this.data.name = names[Math.floor(Math.random() * names.length)]
    },
  },
  mounted() {},
})
