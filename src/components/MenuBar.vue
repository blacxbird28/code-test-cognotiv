<template>
  <div class="menu-bar fixed transition ease-out-expo duration-700 -translate-x-[55%] translate-y-[70%]"
    :class="[showAbout ? 'opacity-100 visible' : 'opacity-0 invisible']">
    <ul class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-black-1 font-bold text-left">
      <li v-for="(item, index) in menuItems" :key="index" class="relative mb-8 lg:mb-7 md:mb-6 sm:mb-5 transition ease-in hover:opacity-50"
        :class="{'text-light-yellow hover:opacity-100':activeMenu === item.name}">
        
        <div class="absolute top-[50%] h-[17px]
          xl:-left-[40%] lg:-left-[35%] md:-left-[30%]  
          xl:w-[128px] lg:w-[100px] md:w-[90px] 
          bg-light-yellow scale-x-0 origin-left transition ease-out-expo duration-700" 
          :class="{
            'scale-x-100':activeMenu === item.name
          }"></div>

        <button @click="onHandleSlideTo(index); onHandleChange(item.name);" >{{item.name}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MenuBar',
    props: ['showAbout', 'menuItems', 'activeMenu'],
    emits: ["slideTo", "change"],
    methods: {
      onHandleSlideTo(index) {
        this.$emit("slideTo", index);
      },
      onHandleChange(name) {
        this.$emit("change", name);
      },
    },
  }
</script>