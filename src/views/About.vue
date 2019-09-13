<template>
  <div class="about">
    <Header />
    <div class="content">
      <h1>Company Profile</h1>
    </div>
    <div class="header">
    </div>
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue'

export default {
  name: 'about',
  components: {
    Header
  }
}
</script>

<style scoped>
.header
{
    background-image: url("../assets/bg-01.png");
    height: 200px;
    background-size:cover;
}
.content
{
  position:absolute;
  margin:100px 0px 0px 50px;
  font-family: "Raleway";
}
h1
{
  color: #272727; 
}
</style>