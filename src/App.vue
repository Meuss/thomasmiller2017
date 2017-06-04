<template>
  <div id="app">
    <div class="particles">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="140"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <router-view></router-view>
    <img src="./assets/bg-test-mountain.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Sofia Pro Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
body {
  background-image: url(./assets/bg-test.jpg);
  background-size: cover;
  background-position: center center;
  margin: 0px;
}
.particles {
  // position: absolute;
  height: 100%;
  width: 100%;
}
img {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  pointer-events: none;
}
</style>
