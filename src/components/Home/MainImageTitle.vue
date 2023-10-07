<template>
  <div class="w-[960px] h-[78vh] max-h-[598px] mx-auto overflow-hidden transition ease-in" 
    :class="{ 'translate-x-2/3 scale-[2] opacity-0': showAbout }">
  <img src="@/assets/images/bg-content-home.png" class="transition ease-out-expo duration-700 grayscale w-full h-full object-cover
    group-hover/background:scale-105
    group-hover/background:grayscale-0">
</div>

<p class="absolute transition ease-out-expo duration-700 text-light-yellow font-bold text-1xxl -translate-y-[80px] -translate-x-[110px]
    group-hover/background:-translate-y-[70px]
    group-hover/background:-translate-x-[70px]
    group-hover/background:scale-105"
  :class="{ '-translate-y-full scale-100 opacity-0': showAbout }"
  >We Create</p>
</template>

<script>
  export default {
    name: 'MainImageTitle',
    props: ['showAbout'],
  }
</script>