<template>
    <div>
        <div id="nav">
            <router-link id = "headerlogo" class = "link" to="/"><img src="../../assets/edycheader-01.svg" alt=""></router-link>
            <router-link class = "link" to="/">Home</router-link>
            <router-link class = "link" to="/about">About</router-link>
            <router-link class = "link" to="/products">Products</router-link>
            <router-link class = "link" to="/company">Company</router-link>
            <router-link class = "link" to="/services">Services</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    #nav
    {
      font-family: "Helvetica Neue";
      position:absolute;
      font-weight: 300;        
      font-size: 15px;
      text-decoration: none;
      width: 100%;
      padding: 20px 20px 20px 20px;

    }
    #headerlogo img
    {
        height: 25px;
        position: absolute;
    }
    .link
    {
        padding:20px 50px 20px 50px;
        color:#585858;
        text-decoration: none;
        transition: .4s;
        
    }
    .link:hover
    {
        color: #080808;
    }
</style>