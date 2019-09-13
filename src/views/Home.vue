<template>
  <div class="home">
    <Header />
    <div id = "bg"></div>  
    <div class="contents">
      <div id="line"></div>
      <h2>EDYC</h2>
      <p>Enterprises </p>
      <span>Sole Distributor of XY FUJI Elevator</span>
      <div class="social">
        <div class="icons" title="Check out our Facebook page">
          <fa :icon="['fab', 'facebook-f']" style="margin-left:3px;" />
        </div> 
        <div class="icons"  title="See our latest Twitter post">
          <fa :icon="['fab', 'twitter']"/>
        </div>
        <div class="icons" title="Discover news on our Google+">
          <fa :icon="['fab', 'google-plus-g']" />
        </div>    
      </div>
    </div>
    <div class="tagline">
      <h1>Elevators you need, <br>All here.</h1>
      <p>Check out our wide selection of elevators with different types.</p>
    </div>
    <div class="cards">
      asdfad
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
  .tagline
  {
    margin:20px 0px;
    font-family: "Raleway";
    text-align: center;
    color:#f3f3f3;
  }
  .tagline p
  {
    color:#acacac;
    font-size:12px;
  }
  #bg
  {
    background-image: url("../assets/backbg-01.jpg");
    height: 700px;
    background-size:cover;
    box-shadow: -10px 3px 30px 10px rgba(17, 17, 17, 40%);
  }
  .contents
  {
    transition: .4s;
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
    margin-left:5px;
    color:#666666;
  }
  span
  {
    font-size: 12px;
    font-weight: 400;
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
  .social
  {
    display:flexbox;
  }
  .icons
  {
    transition:.4s;
    cursor:pointer;
    background: #303030;
    color: white;
    padding: 10px;
    font-size: 20px;
    width: 40px;
    border-radius: 100px;
    text-align: center;
    display:inline-flex;
    margin:20px 5px 5px 5px;
  }
  .icons:hover
  {
    background: #666666;
  }
</style>


