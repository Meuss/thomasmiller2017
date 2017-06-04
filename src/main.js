// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueParticles from 'vue-particles';
import App from './App';
import router from './router';

Vue.use(VueParticles);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// =====================================================
// Just some text shadow effects
// =====================================================
const homepage = document.querySelector('.name-wrap');
const name = homepage.querySelector('h1');
const walk = 20;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = homepage;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  /* eslint-disable */
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  /* eslint-enable */
  name.style.textShadow = `
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,0,0.7)
  `;
}
homepage.addEventListener('mousemove', shadow);
