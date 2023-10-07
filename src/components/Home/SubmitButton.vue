<template>
  <button @click="onHandleShow(); onHandleChangeBack();" class="group/navitem absolute block w-[1040px] pointer-events-none
      group-hover/background:pointer-events-auto"
    :class="{ 'invisible': showAbout, '-bottom-10': windowHeight < 1024, '-bottom-20': windowHeight >= 1024 }">
    <div class="absolute w-full h-full transition ease-out-expo duration-700 rounded-2xl opacity-100 top-0 -translate-x-full
      group-hover/navitem:bg-light-yellow 
      group-hover/navitem:-translate-x-[10%]
      group-hover/navitem:opacity-100
      group-hover/navitem:-z-1"></div>
      
    <div class="relative flex justify-between content-center -translate-x-[10%] px-11 py-9">
      <p class="relative w-[80%] transition ease-out-expo duration-700 opacity-0 text-7xl text-light-yellow font-bold -translate-x-full
        group-hover/background:opacity-100 
        group-hover/background:-translate-x-5 
        group-hover/navitem:text-white
        ">AWESOME THINGS</p>

      <div class="relative w-[151px] h-[74px] ml-[20px] transition ease-out-expo duration-700 translate-x-[100%] opacity-0 bg-arrow-yellow
        group-hover/background:opacity-100 
        group-hover/background:-translate-x-5
        group-hover/navitem:bg-arrow-white">
      </div>

    </div>
  </button>
</template>

<script>
  export default {
    name: 'SubmitButton',
    props: ['showAbout'],
    emits: ["click", "onShow"],
    data() {
      return {
        windowHeight: window.innerHeight
      }
    },
    methods: {
      onHandleChangeBack() {
        this.$emit("click", 'About Us');
      },
      onHandleShow() {
        this.$emit("onShow");
      }
    },
  }
</script>