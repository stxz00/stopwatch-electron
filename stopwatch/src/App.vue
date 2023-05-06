<template>
  <v-app style="background-color: black;">
    <v-main>
      <HelloWorld style=" min-width: 320px;"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
<style scoped>
body {
    background-color: black;
    min-width: 330px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
.set-time-input {
  color : white; 
  font-size: 25px; 
  border: 1px solid white; 
  border-radius: 10px; 
  text-align: center;
}
.btn-control {
  font-weight: bold;
  font-size: 20px;
}
</style> 