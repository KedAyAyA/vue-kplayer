<template>
   <div class="slider">
     <div class="slider-progress" @click="handleBar" ref="barback">
        <div 
          class="slider-progress__bar" 
          ref="bar" 
          :style="'width:' + barWidth + '%'">
        </div>
        <div 
          class="slider-progress__roll" 
          :style="'left:' + barWidth + '%'" 
          @mousedown="handleDownRoll"
          @mouseup="handleUpRoll"
          @mousemove="handleMoveRoll">
        </div>
     </div>
   </div>
</template>
<script>

export default {
  data () {
    return {
      initLeft: 0,
      barWidth: 0,
      record: false
    }
  },
  mounted () {
    console.log(this.$refs.bar.getBoundingClientRect().left)
    this.initLeft = this.$refs.bar.getBoundingClientRect().left
  },
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  methods: {
    handleBar (e) {
      console.log(e)
      let left = e.clientX
      let width = this.$refs.barback.clientWidth
      let percent = ((left - this.initLeft) / width * 100).toFixed(2)
      console.log(percent)
      this.barWidth = percent
    },
    handleDownRoll (e) {
      this.record = true
      console.log('down')
    },
    handleMoveRoll (e) {
      if (this.record) {
        console.log('move')
      }
    },
    handleUpRoll (e) {
      this.record = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider-progress {
    margin: 16px 10px;
    height: 6px;
    border-radius: 6px;
    background-color: #e4e7ed;
    position: relative;
    cursor: pointer;
    &__bar {
      width: 40%;
      height: 6px;
      border-radius: 6px;
      background-color: #409eff;
      position: absolute;
      z-index: 100;
    }

    &__roll {
      width: 14px;
      height: 14px;
      border: 3px solid #409eff;
      border-radius: 50%;
      position: absolute;
      top: -7px;
      left: 40%;
      background-color: #fff;
      transform: translateX(-50%);
      cursor: pointer;
      z-index: 200;
      user-select: none;
    }
  }
</style>
