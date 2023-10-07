<template>
  <div class="contact__content fixed top-[50%] -translate-y-[50%] right-[7%] max-w-[548px] max-h-[680px] w-full h-[88.5vh] transition ease-out-expo duration-700">    
    <div class="absolute w-[100px] h-[100px] -top-[26px] -left-[26px]">
      <div class="w-full h-[14px] bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-left"
        :class="{'scale-x-100': activeContent === name}"></div>
      <div class="absolute top-0 left-0 w-[14px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-y-0 origin-top"
        :class="{'scale-y-100': activeContent === name}"></div>
    </div>

    <div class="contact__content absolute top-0 left-0 w-[100%] h-[100%] transition ease-out-expo duration-700"
      :class="[activeContent === name ? 'scale-100 ' : 'scale-0']">

      <div class="contact__content-text max-w-[548px] h-full p-[50px] bg-white-transparent rounded-[10px] text-left ">
        <p class="text-[40px] text-black-1 font-bold leading-[48px]"
          :class="[windowHeight >= 1024 ? 'mb-[30px]' : 'mb-[10px]']">Type your<br /> beautiful name</p>

        <input type="text" class="w-full text-center font-bold text-2xl	text-grey-2 p-[22px] bg-grey-1 rounded-[15px] mb-[50px] outline-0" placeholder="in here of course :)">

        <p class="text-[40px] text-black-1 font-bold leading-[48px]"
          :class="[windowHeight >= 1024 ? 'mb-[30px]' : 'mb-[10px]']">Protect your email<br /> address</p>

        <input type="text" class="w-full text-center font-bold text-2xl	text-grey-2 p-[22px] bg-grey-1 rounded-[15px] mb-[50px] outline-0" placeholder="but not in here :)">
        
        <button @click="onHandleChange('Contact Us');" class="w-full text-center font-bold text-2xl text-white p-3.5 bg-light-yellow rounded-[15px] outline-0	leading-[48px] transition ease-in duration-100
          hover:bg-white-transparent 
          hover:text-grey-3">Submit</button>
      </div>
    </div>

    <div class="absolute w-[100px] h-[100px] -bottom-[26px] -right-[26px]">
      <div class="absolute right-0 w-[14px] h-full bg-light-yellow transition ease-out-expo duration-700 scale-y-0 origin-bottom"
        :class="{'scale-y-100': activeContent === name}"></div>
      <div class="absolute w-full h-[14px] bottom-0 bg-light-yellow transition ease-out-expo duration-700 scale-x-0 origin-right"
        :class="{'scale-x-100': activeContent === name}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactSlide',
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