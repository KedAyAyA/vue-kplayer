<template>
  <div id="app">
    <audio-player
      :src="src"
      @error="handleError"
      @status="handleStatusChange">
    </audio-player>
    <div class="slider-test">
      <slider
        v-model="value1"></slider>
    </div>
    <div class="slider-test">
      <slider
        mode="vertical"
        :height="200"
        size="small"
        v-model="value2"></slider>
    </div>
    <div>
      <input type="text" v-model="srcinput">
      <button @click="src = srcinput">click</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import AudioPlayer from '../dist/vueaudioplayer'
import Slider from './components/Slider.vue'
import AudioPlayer from './components/AudioPlayer'

export default {
  // http://fs.pc.kugou.com/201802121727/3ed397455236944785427fc095f0da06/G010/M0A/1B/08/Sg0DAFT-vv6ARc7oALjd4pW9RV4518.mp3
  data () {
    return {
      src: '',
      srcinput: 'http://kefu.focus.cn/audio/playAudio?callType=true&uniqueId=5f5a7064c3021877:0101290010:10034:2',
      value1: 0,
      value2: 0
    }
  },
  methods: {
    handleError (error) {
      console.log(error)
    },
    handleStatusChange (status) {
      console.log(status)
    }
  },
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
