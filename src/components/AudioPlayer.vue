<template>
  <div class="audio-player">
    <div class="audio-player__progress">
      <div class="audio-player__progress-slider">
        <slider 
          v-model="value"
          @change="handleSliderChange"></slider>
      </div>
      <div class="audio-player__progress-time">00:42:32 / 00:56:00</div>
    </div>
    <div class="audio-player__control">
      <div class="audio-player__control-img">
        <img :src="img" alt="" class="audio-player__control-avatar">
      </div>
      <div class="audio-player__control-icons">
        <i class="fa fa-play-circle-o" aria-hidden="true"></i>
        <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
        <!-- <i class="fa fa-pause-circle-o" aria-hidden="true"></i> -->
      </div>
    </div>

    <div class="audio-player__setting">
      <div class="audio-player__setting-icons">
        <i class="fa fa-volume-up" aria-hidden="true"></i>
        <i class="fa fa-volume-off" aria-hidden="true"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
import dImg from '../assets/kedaya.jpg'
import Slider from './Slider.vue'
export default {
  data () {
    return {
      img: dImg,
      value: 0
    }
  },
  methods: {
    handleSliderChange (value) {
      console.log(value)
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
  @keyframes rotate {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  .audio-player {
    height: 80px;
    border: 1px solid #eee;
    box-sizing: border-box;
    
    &__control {
      float: left;
      margin-left: -100%;
      width: 120px;
      position: relative;
      &-img {
        // line-height: 80px;
        float: left;
      }
      &-avatar {
        margin-top: 5px;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        // animation: 3s linear infinite rotate ;
      }
      &-icons {
        font-size: 20px;
        position: absolute;
        left: 80px;
        bottom: 0;
      }
    }

    &__progress {
      float: left;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 100px 0 120px;

      &-slider {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        top: 48px;
        height: 20px;
        padding-left: 10px;
        padding-right: 140px;
        display: inline-block;
      }

      &-time {
        width: 140px;
        position: absolute;
        right: 100px;
        bottom: 0;
        height: 20px;
        display: inline-block;
      }
    }

    &__setting {
      float: left;
      width: 100px;
      height: 100%;
      margin-left: -100px;
      position: relative;
      &-icons {
        position: absolute;
        bottom: 2px;
      }
    }
  }
</style>
