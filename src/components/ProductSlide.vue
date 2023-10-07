<template>
  <div class="product__content fixed top-[50%] -translate-y-[50%] right-0 max-w-[580px] transition ease-out-expo duration-700"
    :class="[activeContent === name ? 'translate-x-0 ' : '-translate-x-[200%]']">
    <swiper class="mySwiper-product" 
      :slides-per-view="1.2"
      :space-between="50"
      :loop="true"
      :modules="modules"
      @swiper="onSwiperProd">
      <swiper-slide v-for="(text, index) in textSlider" :key="index">
        <div class="px-[75px] pt-[70px] pb-[88px] bg-white-transparent rounded-[10px] text-left">
          <p class="text-black-1 font-bold text-[64px] leading-[78px] mb-12">{{text}}</p>
          <b data-text="PROBLEM" class="relative text-light-yellow font-semibold text-[64px] leading-[1]
            after:content-[attr(data-text)] 
            after:absolute 
            after:top-[7px] 
            after:left-0
            after:text-white
            after:transition
            after:ease-in
            after:overflow-hidden
            after:animate-textLoad
           ">PROBLEM</b>
        </div>
      </swiper-slide>
    </swiper>

    <button @click="handleSlideToProduct();" class="group/slide absolute w-[108px] h-[108px] rounded-full bg-light-yellow transition ease-out-expo duration-700 top-[37%] right-[5%] -transform-y-[50%] z-10
    hover:bg-white-transparent">
      <div class="absolute w-[49px] h-[49px] top-[30%] left-[35%] -transform-x-[50%] -transform-y-[50%] transition ease-out-expo duration-700 bg-next-white bg-center bg-no-repeat
        group-hover/slide:bg-next-yellow"></div>
    </button>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide  } from 'swiper/vue';

  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import { ref } from 'vue';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperProduct: null,
        modules: [Pagination, Navigation],
        direction: false,
        textSlider : ref(['We Know You Have', 'We Solve Your']),
      }
    },
    name: 'ProductSlide',
    props: ['activeContent', 'name', 'directionProps'],
    emits: ["childDirection"],
    methods: {
      onSwiperProd(swiper) {
        this.swiperProduct = swiper;
      },

      handleSlideToProduct() {
        this.direction = !this.direction;
        
        this.$emit("childDirection", this.directionProps);

        if(this.direction) {
          this.swiperProduct.slideNext();
        } else {
          this.swiperProduct.slidePrev();
        }
      },
    },
    watch: { 
      directionProps: function() { 
        this.handleSlideToProduct()
      }
    }
  }
</script>