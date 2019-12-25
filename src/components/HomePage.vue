<template>
  <div class="container">
    <span id="ComingSoon">
      TEDxCUHK 2020 is coming soon
    </span>
    <img style="width: 100%;" src="../assets/TEDxComingSoon.jpg">
    <webfooter/>
  </div>
  
</template>

<script>
import webfooter from './footer'
export default {
    components: {
        webfooter
    },
  name: 'HomePage',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ComingSoon {
  position: absolute;
  z-index: 99999;
  color: white;
  font-weight: bold;
  font-size: 80px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
