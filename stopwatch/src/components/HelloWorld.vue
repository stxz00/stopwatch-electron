<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 style="color : white; font-size: 50px;">{{ formattedTime }}</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <div>
          <input class="set-time-input" type="number" min="0" max="23" v-model="startHour"> :
          <input class="set-time-input" type="number" min="0" max="59" v-model="startMinute"> :
          <input class="set-time-input" type="number" min="0" max="59" v-model="startSecond">
          <!-- <v-btn @click="setStartTime" color="green">Set</v-btn> -->
        </div>
        
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn class="btn-control" @click="start" color="blue">시작</v-btn>
        <v-btn class="btn-control" @click="stop" style="margin-left: 20px;" color="red">정지</v-btn>
        <v-btn class="btn-control" @click="reset" style="margin-left: 20px;" color="gary">리셋</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

let startHour = ref(0)
let startMinute = ref(0)
let startSecond = ref(0)
let startTime = ref(0)
let elapsedTime = ref(0)
let timer = ref(0)
let isStart = ref(false);

const setStartTime = () => {
  startTime.value = new Date(0, 0, 0, startHour.value, startMinute.value, startSecond.value).getTime()
}

const start = () => {
  if (!isStart.value)
  {
    setStartTime();
    elapsedTime.value = 0;
    isStart.value = true;
  }
  
  
  timer.value = setInterval(() => {
    elapsedTime.value += 1;
  }, 1000)
}

const stop = () => {
  clearInterval(timer.value)
  // timer.value = 0;
}

const reset = () => {
  clearInterval(timer.value)
  startTime.value = 0
  elapsedTime.value = 0
  startHour.value = 0
  startMinute.value = 0
  startSecond.value = 0
  timer.value = 0;
  isStart.value = false;
}

// const formattedTime = computed(() => {
//   const hours = startHour.value + Math.floor(elapsedTime.value / 3600);
//   const minutes = startMinute.value + Math.floor((elapsedTime.value % 3600) / 60);
//   const seconds =  startSecond.value + (elapsedTime.value % 3600) % 60;
//   return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`
// })

const formattedTime = computed(() => {
  let totalSeconds = startHour.value * 3600 + startMinute.value * 60 + startSecond.value + elapsedTime.value;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`
})


watch([startHour, startMinute, startSecond], () => {
  setStartTime()
})

const padZero = (num) => {
  return num.toString().padStart(2, '0')
}
</script>
<style scoped>
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