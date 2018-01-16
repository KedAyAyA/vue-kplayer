<template>
  <div class="audio-player">
    <div class="audio-player__control">
      <div class="audio-player__control-img">
        <img :src="img" alt="" class="audio-player__control-avatar">
      </div>
    </div>
    <div class="audio-player__progress">

    </div>
    <div class="audio-player__setting">

    </div>
  </div>
</template>

<script>
import dImg from '../assets/kedaya.jpg'
export default {
  data () {
    return {
      img: dImg
    }
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
      &-img {
        line-height: 80px;
      }
      &-avatar {
        margin-top: 5px;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        animation: 3s linear infinite rotate ;
      }
    }
  }
</style>
