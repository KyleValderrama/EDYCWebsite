<template>
    <div>
        <div id="nav">
            <router-link class = "link" to="/">Home</router-link>
            <router-link class = "link" to="/about">About</router-link>
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
      font-weight: 100;   
      font-size: 12px;
      text-decoration: none;
      width: 100;
      padding: 20px;
      background: #303030;
    }
    .link
    {
        padding:0 30px;
        color: white;
        text-decoration: none;
    }
</style>