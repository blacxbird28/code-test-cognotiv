<template>
  <div class="grid h-screen place-items-center mx-auto py-20 bg-paper overflow-hidden">

    <!-- HOME MAIN -->
    <div class="home">
      <div class="w-full relative flex justify-center"
          :class="[!showAbout ? 'group/background' : '']">

        <!-- STRIPES LINE -->
        <StripesLine />

        <!-- MAIN IMAGE TITLE -->
        <MainImageTitle 
          :showAbout="showAbout"
        />
        
        <!-- SUBMIT NEXT PAGE -->
        <SubmitButton 
          :showAbout="showAbout" 
          @onShow="showAbout = !showAbout"
          @click="handleChangeBack"
        />
      </div>
    </div>

    <!-- BACK TOP -->
    <BackTop 
      :showAbout="showAbout" 
      :backTop="backTop"
      :activeMenu="activeMenu" 
      @click="handleResetBack" />
    
    <!-- SLIDER -->
    <div class="fixed transition ease-out-expo duration-700 h-screen w-[67%]"
      :class="{
                'opacity-100 visible scale-100 right-0': showAbout, 
                'opacity-0 invisible scale-50 right-[20%]': !showAbout
              }">
      <swiper :direction="'vertical'" class="mySwiper" @swiper="onSwiper">
        <swiper-slide v-for="(item, index) in menuItems" :key="index">
          <div class="relative w-full h-full transition ease-out-expo duration-700 bg-cover	"
            :class="{
                      'grayscale': activeContent === item.name,
                      'bg-about': index === 0,
                      'bg-product': index === 1,
                      'bg-contact': index === 2,
                    }">
          </div>

          <div v-if="index === 0">

            <!-- About Slide -->
            <AboutSlide 
              :name="item.name" 
              :activeContent="activeContent" 
              @change="handleChange" />

          </div>

          <div v-else-if="index === 1">
            
            <!-- Product Slide -->
            <ProductSlide 
              :name="item.name" 
              :activeContent="activeContent"
              :directionProps="direction"
              @childDirection="handleSlideToProduct" />
              
          </div>

          <div v-else>

            <!-- Contact Slide -->
            <ContactSlide 
              :name="item.name" 
              :activeContent="activeContent" 
              @change="handleChange" />

          </div>

        </swiper-slide>
      </swiper>
    </div>

    <!-- MENUBAR -->
    <MenuBar 
      :showAbout="showAbout" 
      :activeMenu="activeMenu" 
      :menuItems="menuItems" 
      @slideTo="handleSlideTo" 
      @change="handleChange" />

  </div>
</template>

<script>
  import BackTop from '@/components/BackTop.vue';
  import AboutSlide from '@/components/AboutSlide.vue';
  import ProductSlide from '@/components/ProductSlide.vue';
  import ContactSlide from '@/components/ContactSlide.vue';
  import MenuBar from '@/components/MenuBar.vue';
  import StripesLine from '@/components/Home/StripesLine.vue';
  import MainImageTitle from '@/components/Home/MainImageTitle.vue';
  import SubmitButton from '@/components/Home/SubmitButton.vue';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide  } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import { ref } from 'vue'

  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      BackTop,
      Swiper,
      SwiperSlide,
      MenuBar,
      AboutSlide,
      ProductSlide,
      ContactSlide,
      StripesLine,
      MainImageTitle,
      SubmitButton
    },
    data() {
      return {
        swiper    : null,
        swiperProduct: null,
        showAbout : ref(false),
        activeMenu: ref(null),
        activeContent : ref(null),
        menuItems : ref([{ name: 'About Us' }, { name: 'Our Product' }, { name: 'Contact Us' }]),
        backTop   : ref(false),
        modules: [Pagination, Navigation],
        direction: ref(false)
      };
    },
    
    methods: {
      onSwiper(swiper) {
        this.swiper = swiper;
      },

      handleSlideTo(index) {
        this.swiper.slideTo(index);
      },

      handleSlideToProduct(direction) {
        this.direction = !direction;
      },

      handleResetBack() {
        this.showAbout = !this.showAbout;
        this.backTop = false;
        this.activeMenu = null;
        this.activeContent = null;
        this.swiper.slideTo(0);
      },

      handleChange(name) {
        this.backTop = !this.backTop;
        this.activeMenu = null;
        this.activeContent = null;
        this.direction = false,
        this.handleChangeBack(name);
      },

      handleChangeBack(name) {
        this.activeMenu = name;
        setTimeout(() => {
          this.backTop = !this.backTop;
          this.activeContent = name;
        },1000);
      },

    }
  };
</script>
