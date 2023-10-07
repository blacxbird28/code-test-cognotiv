<template>
  <div class="back-top fixed w-full top-0 left-0" :class="[showAbout ? 'opacity-100 visible' : 'opacity-0 invisible']">
    <div class="w-full h-[288px] bg-light-yellow transition ease-out-expo duration-700 origin-left"
      :class="[backTop ? 'scale-x-100 ': 'scale-x-0']"></div>
    <button @click="onHandleResetBack();"
      class="absolute top-[46px] left-[46px] transition ease-out-expo duration-700 text-xl flex items-center"
      :class="[backTop ? 'text-white' : 'text-black-1']">
      <div class="w-[20px] h-[20px] transition ease-out-expo delay-700 bg-center-left bg-no-repeat"
        :class="[backTop ? 'bg-arrow-back-white' : 'bg-arrow-back-black']"></div>
      <p class="ml-[10px]"> Back</p>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    props: ['showAbout', 'backTop', 'activeMenu'],
    emits: ["click"],
    methods: {
      onHandleResetBack() {
        this.$emit("click");
      },
    },
  }
</script>