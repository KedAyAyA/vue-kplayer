<template>
  <div id="app">
    <audio-player></audio-player>
    <div class="slider-test">
      <slider></slider>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import AudioPlayer from '../dist/vueaudioplayer'
import Slider from './components/Slider.vue'
import AudioPlayer from './components/AudioPlayer'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AudioPlayer,
    Slider
  }
}
</script>

<style>
#app {

}

.slider-test {
  height: 40px;
}
</style>
