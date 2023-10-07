<template>
  <div class="fixed flex justify-between w-[230px] h-[18px]"
    :class="[windowHeight >= 1024 ? 'top-[50px] right-[50px]' : 'top-[20px] right-[20px]']">
    <div class="w-[67px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-right
      group-hover/background:scale-x-100"></div>
    <div class="w-[140px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-right
      group-hover/background:scale-x-100"></div>
  </div>
  
  <div class="fixed flex justify-between w-[230px] h-[18px]"
  :class="[windowHeight >= 1024 ? 'bottom-[50px] left-[50px]' : 'bottom-[20px] left-[20px]']">
    <div class="w-[140px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-left
      group-hover/background:scale-x-100"></div>
    <div class="w-[67px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-left
      group-hover/background:scale-x-100"></div>
  </div>
</template>

<script>
  export default {
    name: 'StripesLine',
    data() {
      return {
        windowHeight: window.innerHeight
      }
    },
  }
</script>