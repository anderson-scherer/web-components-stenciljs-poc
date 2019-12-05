import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@andersonscherer/web-components-uni/loader';

Vue.config.productionTip = false;

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
