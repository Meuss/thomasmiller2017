<template>
  <div class="homepage">
    <h1>Thomas</h1>
    <h1>Miller</h1>
    <h2>{{ msg }}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      msg: 'A frontend developer from Switzerland',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Sofia Pro Bold', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 140px;
  line-height: 120px;
  margin: 0px;
}
h2 {
  font-weight: normal;
  padding-left: 30px;
}
.homepage {
  text-align: left;
  position: absolute;
  top: 450px;
  left: 200px;
}

</style>
