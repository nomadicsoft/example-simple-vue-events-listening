import Vue from 'vue'

Vue.component('emitter', {template:
      '<button @click="$root.$emit(`button-clicked`)">Click me</button>'
});

Vue.component('listener', {
  template: "<div>{{text}}</div>",
  data: function () { return {
    text: 'Initial text'
  }},
  mounted() {
    this.$root.$on('button-clicked', () => this.text = 'Button clicked')
  }
});

const App = Vue.component('App', {template:
      "<div id='app'><emitter/><listener/></div>"
});
new Vue({render: h => h(App)}).$mount('#app');
