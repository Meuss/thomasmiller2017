<template>
  <div class="homepage">
    <div class="name-wrap">
      <h1>Thomas Miller</h1>
    </div>
    <h2>{{ msg }}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      msg: 'creating shit since 2014',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-wrap {
  padding: 100px 100px 0px 100px;
}
h1 {
  font-family: 'Sofia Pro Bold', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 140px;
  line-height: 120px;
  color: #dedede;
  margin: 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
h2 {
  font-weight: normal;
  padding-left: 30px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  padding-left: 300px;
}
.homepage {
  text-align: left;
  position: absolute;
  top: 250px;
  left: 300px;
}

</style>
