<template>
  <div class="home">
    <Header />
    <div id = "bg"></div>  
    <div class="contents">
      <div id="line"></div>
      <h2>EDYC</h2>
      <p>Enterprises</p>
      <span>Sole Distributor of XY FUJI Elevator</span>
      <fa icon="coffee" />
    </div>
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

<style>
  #bg
  {
    background-image: url("../assets/backbg-01.jpg");
    height: 700px;
    background-size:cover;
  }
  .contents
  {
    top:0;
    position:absolute;
    margin-top: 100px;
    margin-left:100px;
    padding: 20px 40px;
    color:#262626;
    width: 400px;
    background: rgba(102, 102, 102, 30%);
    font-family: 'Helvetica Neue';
  }
  h2
  {
    font-family: 'Tungsten';
    font-size: 100px;
    margin:0;
  }
  p
  {
    font-size: 20px;
    font-weight: 100px;
    margin-left:5px;
    color:#666666;
  }
  span
  {
    font-size: 12px;
    font-weight: 100px;
    margin-left:5px;
  }
  #line
  {
    width: 10px;
    height: 100%;
    background: rgb(95, 6, 6);
    position: absolute;
    top:0;
    left:0;
  }
</style>


