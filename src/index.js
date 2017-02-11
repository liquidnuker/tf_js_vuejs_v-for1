// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
const Vue = require("./js/vendor/vue.min.js");

// <todo-item>
Vue.component("todo-item", {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todoz'],
  template: `<li>{{ todoz.text }}</li>`
});

let app7 = new Vue({
  el: "#app-7",
  data: {
    itemList: [{
      text: 'item1'
    }, {
      text: 'item2'
    }, {
      text: 'item3'
    }]
  }
});