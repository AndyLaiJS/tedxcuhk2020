<template>

  <!-- 
  To start it off, I'm using the vueJS framework for this entire thing.

  I have written some horrifyingly weird ass codes all over. I apologize in advance for that, and thus would like to take this opportunity
  to tell you that if you so happen to stumble on codes that makes absolutely no sense, please don't hesitate to nag the hell out of me because
  tbh I kinda deserved it. My email: Lai9879m@gmail.com

  Thank you for reading, and I wish you the best in comprehending the spaghetti code that will ensue.
  -->

  <div id="app">
    <div class="navbar">
      <a href=""><img id="logo" src="./assets/logo.png"></a>

      <div class="menu">

        <a href="">Home</a>
        <router-link to="Event">Event</router-link>
        <router-link to="Speakers">Speakers</router-link>
        <router-link to="About">About</router-link>
      
      </div>
    </div>

    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
.menu {
  color: white;
  float: right;
  display: inline-grid;
  font-size: 15px;
  text-align: center;
  grid-template-columns: 120px 120px 120px 120px;
}
.menu a {
  cursor: pointer;
  transition: ease-in-out 0.22s;
  color: white;
  text-decoration: None;
}

.menu a:hover {
  transition: ease-in-out 0.22s;
  background-color: #151515;
  color: #e62b1e;
}
#logo {
  margin-top: 7px;
  height: 55px;
}
#app {
  font-family: 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: None;
}
#app a:hover {
  color: #e62b1e;
}
.navbar {
  z-index: 99999;
  position: sticky;
  position:-webkit-sticky;
  top: 0;
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.33);
  height: 70px;
  line-height: 70px;
  background-color: black;
  font-weight: bolder;
  font-size: 30px;
  padding: 0 17% 0 17%;
}

</style>
