<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/layouts/Header.vue'


export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style scoped>
.home
{
  padding:0;
  margin:0;
}
</style>
