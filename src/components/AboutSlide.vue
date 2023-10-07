<template>
  <div class="about__content fixed top-[50%] -translate-y-[50%] right-[7%] max-w-[580px] w-full h-[86.5vh] max-h-[670px]">    
    <div class="absolute w-[100px] h-[100px] -top-[26px] -left-[26px]">
      <div class="w-full h-[14px] bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-left"
        :class="{'scale-x-100': activeContent === name}"></div>
      <div class="absolute top-0 left-0 w-[14px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-y-0 origin-top"
        :class="{'scale-y-100': activeContent === name}"></div>
    </div>

    <div class="absolute top-0 about__content-text pl-[56px] pr-[75px] pt-[54px] pb-[66px] bg-white-transparent rounded-[10px] text-left transition ease-out-expo duration-700"
      :class="[activeContent === name ? 'translate-x-0 ' : 'translate-x-[130%]']">
      <p class="text-[64px] text-black-1 font-bold leading-[78px] mb-[43px] transition ease-out-expo duration-700 delay-100"
        :class="[activeContent === name ? 'translate-x-0 ' : 'translate-x-[130%]']">Our People<br >Come First</p>

      <p class="text-4xl text-black-1 font-semibold transition ease-out-expo duration-700 delay-150"
        :class="[activeContent === name ? 'translate-x-0 ' : 'translate-x-[130%]']">We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.</p>
    </div>

    <button @click="onHandleChange('About Us');" 
      class="absolute bottom-0 right-0 bg-light-yellow px-[35px] py-[17px] rounded-[10px] text-white text-2xl font-bold transition ease-in delay-150
        hover:bg-white-transparent 
        hover:text-grey-3"
      :class="{
          'translate-y-0 opacity-100':activeContent === name,
          'translate-y-[200px] opacity-0':activeContent !== name,
          'translate-y-[30px]':windowHeight < 1024,
          'translate-y-0':windowHeight >= 1024
      }">Learn more</button>
  </div>
</template>

<script>
  export default {
    name: 'AboutSlide',
    props: ['activeContent', 'name'],
    emits: ["change"],
    data() {
      return {
        windowHeight: window.innerHeight
      }
    },
    methods: {
      onHandleChange(name) {
        this.$emit("change", name);
      },
    },
  }
</script>