<template>
    <div class="container"> 
        <div class="content">
            <span id="staytune">Stay tune for more info</span>
            <img style="width: 100%;" src="../assets/TEDxStayTune.jpg">
        </div>
    <webfooter/>
    </div>
</template>

<script>
import webfooter from './footer'
export default {
    components: {
        webfooter
    },
}
</script>

<style scoped>
#staytune {
    position: absolute;
    z-index: 99999;
    color: white;
    font-weight: bold;
    font-size: 80px;
    top: 38%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
</style>