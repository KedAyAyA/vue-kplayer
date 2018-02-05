<template>
  <div class="audio-player">
    <div class="audio-player__progress">
      <div class="audio-player__progress-slider">
        <slider 
          v-model="value"
          :max="max"
          @change="handleSliderChange"></slider>
      </div>
      <div class="audio-player__progress-time">{{ now }} / {{ total }}</div>
    </div>
    <div class="audio-player__control">
      <div class="audio-player__control-img">
        <img :src="img" alt="" class="audio-player__control-avatar" :class="{'audio-player--rotate': isPlaying}">
      </div>
      <div class="audio-player__control-icons">
        <i 
          class="fa fa-play-circle-o"
          aria-hidden="true" 
          @click="handlePlay"
          v-if="!isPlaying">
        </i>
        <i 
          class="fa fa-pause-circle-o" 
          aria-hidden="true"
          @click="handlePause" 
          v-if="isPlaying">
        </i>
        <i 
          class="fa fa-stop-circle-o" 
          aria-hidden="true" 
          @click="handleStop">
        </i>
      </div>
    </div>
    <div class="audio-player__audio">
      <audio 
        :src="src"
        ref="audio"
        @loadstart="handleLoadStart"
        @canplay="handleCanPlay"
        @ended="handleEnded"
        @error="handleError"
        @progress="handleProgress"
        @pause="handleEventPause"
        @play="handleEventPlay"
        @playing="handleEventPlaying"
        @seeked="handleEventSeeked"
        @seeking="handleEventSeeking"
        @durationchange="handleDuration"
        @timeupdate="handleTimeUpdate"> 
      </audio>
     </div>
    <div class="audio-player__setting">
      <div class="audio-player__setting-icons">
        <div class="audio-player__volume">
          <slider
            mode="vertical"
            size="small"
            v-model="volume"
            :height="60"
            :max="100"
            @change="handleChangeVolume">
          </slider>
        </div>
        <i class="fa fa-volume-up" v-show="volume >= 80" aria-hidden="true"></i>
        <i class="fa fa-volume-down" aria-hidden="true" v-show="volume < 80 && volume > 20"></i>
        <i class="fa fa-volume-off" aria-hidden="true" v-show="volume <= 20"></i>
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
      value: 0,
      status: '',
      max: 100,
      duration: 0,
      volume: 50
    }
  },
  computed: {
    isPlaying () {
      return this.status === 'playing'
    },
    now () {
      return this.secondToTime(this.value)
    },
    total () {
      return this.secondToTime(this.duration)
    }
  },
  methods: {
    handleSliderChange (value) {
      this.setCurrentTime(value)
    },
    handleChangeVolume (value) {
      console.log(value)
      let volume = (value / 100).toFixed(2)
      let audio = this.getAudioElement()
      audio.volume = volume
    },
    handlePlay () {
      let audio = this.getAudioElement()
      let audioPromise = audio.play()
      audioPromise.catch(err => {
        this.$emit('error', {
          code: 999,
          message: err.message
        })
      })
      // console.log(this.$refs.audio.duration)
      // for (let key in this.$refs.audio) {
      //   console.log(key, this.$refs.audio[key])
      // }
      // console.log(this.$refs.audio)
    },
    handlePause () {
      let audio = this.getAudioElement()
      audio.pause()
    },
    handleStop () {
      let audio = this.getAudioElement()
      audio.pause()
      audio.currentTime = 0
      this.status = 'stop'
      console.log('stop')
    },
    getAudioElement () {
      return this.$refs.audio
    },
    handleLoadStart () {
      console.log(this.$refs.audio.duration)
      console.log('loadstart')
    },
    handleCanPlay () {
      let audio = this.getAudioElement()
      this.max = this.duration = audio.duration
      console.log('canplay')
    },
    handleEnded () {
      console.log('ended')
    },
    handleError () {
      let audio = this.getAudioElement()
      console.log(audio.error.code, audio.error.message)
      this.value = this.duration = 0
      this.$emit('error', audio.error)
    },
    handleProgress () {
      // let audio = this.getAudioElement()
      // console.log('progress', audio.buffered)
    },
    handleEventPause () {
      this.status = 'pause'
      console.log('pause')
    },
    handleEventPlay () {
      console.log('play')
    },
    handleEventPlaying () {
      this.status = 'playing'
      console.log('playing')
    },
    handleEventSeeked () {
      console.log('seeked')
    },
    handleEventSeeking () {
      console.log('seeking')
    },
    handleDuration () {
      console.log('duration')
    },
    handleTimeUpdate () {
      let audio = this.getAudioElement()
      this.value = audio.currentTime
      console.log('timeupdate', audio.currentTime)
    },
    setCurrentTime (time) {
      let audio = this.getAudioElement()
      audio.currentTime = time
    },
    secondToTime (second) {
      if (isNaN(second)) {
        return '00:00:00'
      }
      const add0 = (num) => {
        return num < 10 ? '0' + num : '' + num
      }
      const min = parseInt(second / 60)
      const sec = parseInt(second - min * 60)
      const hours = parseInt(min / 60)
      const minAdjust = parseInt((second / 60) - (60 * parseInt((second / 60) / 60)))
      return add0(hours) + ':' + add0(minAdjust) + ':' + add0(sec)
    }
  },
  mounted () {
    this.handleChangeVolume(this.volume)
  },
  components: {
    Slider
  },
  props: {
    src: {
      type: String,
      default: ''
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
      }
      &-icons {
        font-size: 20px;
        position: absolute;
        left: 80px;
        bottom: 0;
        i {
          cursor: pointer;
        }
      }
    }

    &__progress {
      float: left;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 50px 0 120px;

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
        right: 50px;
        bottom: 0;
        height: 20px;
        display: inline-block;
      }
    }

    &__setting {
      float: left;
      width: 50px;
      height: 100%;
      margin-left: -50px;
      position: relative;
      &-icons {
        position: absolute;
        bottom: 2px;
        i {
          cursor: pointer;
        }
      }
      &:hover {
        .audio-player__volume {
          display: block;
        }
      }
    }

    &__volume {
      position: absolute;
      left: 8px;
      bottom: 0;
    }

    &--rotate {
      animation: 3s linear infinite rotate;
    }
  }
</style>
