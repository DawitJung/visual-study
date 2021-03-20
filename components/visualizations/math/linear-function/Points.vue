<template>
  <div class="overflow-x-auto">
    <div ref="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return { p5: undefined }
  },
  mounted() {
    if (this.p5) return
    const sketch = (p5) => {
      const canvasSize = [300, 300]
      const O = [50, 250]
      const slope = 1
      const points = []
      p5.setup = () => {
        p5.createCanvas(...canvasSize)
      }
      p5.draw = () => {
        p5.background(255)
        drawAxes()
        updatePoints()
      }
      function updatePoints() {
        // TODO: 0.5초 마다 점 추가
      }
      function drawAxes() {
        p5.strokeWeight(1)
        p5.stroke('rgb(0,200,0)')
        p5.line(0, O[1], canvasSize[0], O[1])
        p5.line(O[0], 0, O[0], canvasSize[1])
      }
    }
    this.p5 = new this.P5(sketch, this.$refs.container)
  },
}
</script>
