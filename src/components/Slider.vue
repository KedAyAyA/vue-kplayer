<template>
   <div class="slider">
     <div 
      class="slider-progress" 
      :class="{'slider-progress--vertical': isVertical, 'slider-progress--small': size === 'small'}"
      :style="(isVertical ? `height: ${height}px` : '')"
      @click="handleBar" 
      ref="barback">
        <div 
          class="slider-progress__bar"
          ref="bar" 
          :style="(isVertical ? 'height:' : 'width:') + position + '%'">
        </div>
        <div 
          class="slider-progress__roll" 
          :style="(isVertical ? 'bottom:' : 'left:') + position + '%'" 
          @mousedown="handleDownRoll"
          @mouseup="handleUpRoll"
          @mousemove="handleMoveRoll">
        </div>
     </div>
   </div>
</template>
<script>
/**
 * Todo
 * 1.add disable to limit
 */
export default {
  data () {
    return {
      initSide: 0,
      barWidth: 0,
      position: 0,
      record: false
    }
  },
  mounted () {
    // console.log(this.$refs.bar.getBoundingClientRect().left)
    this.initSide = this.isVertical
      ? this.$refs.bar.getBoundingClientRect().bottom
      : this.$refs.bar.getBoundingClientRect().left
    this.culPosition()
  },
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  watch: {
    value (oldv, newv) {
      this.culPosition()
    }
  },
  computed: {
    isVertical () {
      return this.mode === 'vertical'
    }
  },
  methods: {
    handleBar (e) {
      let pos = this.isVertical ? e.clientY : e.clientX
      this.convertPosToVal(pos)
    },
    handleDownRoll (e) {
      this.record = true
      console.log('down')
      document.addEventListener('mousemove', this.handleMoveRoll)
      document.addEventListener('mouseup', this.handleUpRoll)
    },
    handleMoveRoll (e) {
      if (this.record) {
        console.log('move')
        this.convertPosToVal(this.isVertical ? e.clientY : e.clientX)
      }
    },
    handleUpRoll (e) {
      this.record = false
      console.log('up')
      document.removeEventListener('mousemove', this.handleMoveRoll)
      document.removeEventListener('mouseup', this.handleUpRoll)
    },
    convertPosToVal (pos) {
      pos = this.fixPositionBound(pos)
      let percent = Math.abs(pos - this.initSide) / this.barWidth
      console.log(percent)
      let value = percent * (this.max - this.min) + this.min
      this.$emit('input', value)
      this.$emit('change', value)
    },
    culPosition () {
      let percent = (this.value / (this.max - this.min) * 100).toFixed(2)
      this.setPosition(percent)
    },
    setPosition (percent) {
      this.position = percent
    },
    resetSize () {
      this.initSide = this.isVertical
        ? this.$refs.bar.getBoundingClientRect().bottom
        : this.$refs.bar.getBoundingClientRect().left
      this.barWidth = this.isVertical
        ? this.$refs.barback.clientHeight
        : this.$refs.barback.clientWidth
    },
    fixPositionBound (pos) {
      this.resetSize()
      if (this.isVertical) {
        if (pos > this.initSide) {
          pos = this.initSide
        }
        if (pos < this.initSide - this.barWidth) {
          pos = this.initSide - this.barWidth
        }
      } else {
        if (pos < this.initSide) {
          pos = this.initSide
        }
        if (pos > this.initSide + this.barWidth) {
          pos = this.initSide + this.barWidth
        }
      }
      return pos
    },
    fixValueBound (value) {
      if (value < this.min) {
        value = this.min
      }
      if (value > this.max) {
        value = this.max
      }
      return value
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

    &--vertical {
      width: 6px;
      margin: 10px 16px;
      position: relative;
      .slider-progress {
        &__roll {
          position: absolute;
          top: auto;
          left: auto;
          margin-left: 3px;
          transform: translate(-50%, 50%);
        }
        &__bar {
          position: absolute;
          width: 6px;
          bottom: 0;
        }
      }
    }
    &--small {
      width: 4px;
      .slider-progress {
        &__roll {
          width: 6px;
          height: 6px;
          margin-left: 2px;
        }
        &__bar {
          width: 4px;
        }
      }
    }
  }
</style>
