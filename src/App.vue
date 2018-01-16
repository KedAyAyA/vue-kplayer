<template>
  <div id="app">
    <audio-player></audio-player>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import AudioPlayer from '../dist/vueaudioplayer'
import AudioPlayer from './components/AudioPlayer'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AudioPlayer
  }
}
</script>

<style>
#app {

}
</style>
