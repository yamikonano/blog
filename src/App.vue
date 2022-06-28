<template>

  <Header></Header>

  <div class="content boundary">

    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <Leftnav></Leftnav>
    </div>
  </div>

  <Footer></Footer>

</template>

<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import RightNav from './components/LeftNav/LeftNav.vue'
import Leftnav from './components/RightNav/RightNav.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
html,body{
  margin: 0;
  padding: 0;
  width: 100vw;
}

#app {
  font-family: Nunito sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.boundary{
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.left{
  flex-grow: 1;
  overflow-x: hidden;
}
.right{
  width: 380px;
  box-sizing: border-box;
  padding-left: 50px;
}
</style>
