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
      const O = [150, 150]
      let slope = 0
      const slopeIncrementPS = 0.01
      const endYs = [150, 150]
      p5.setup = () => {
        p5.createCanvas(...canvasSize)
      }
      p5.draw = () => {
        p5.background(255)
        drawAxes()
        updateSlope()
        updateEndYs()
        drawLine()
        writeFormula()
      }
      function updateSlope() {
        slope += slopeIncrementPS
      }
      function updateEndYs() {
        endYs[0] = O[0] + O[0] * slope
        endYs[1] = O[0] - (canvasSize[0] - O[0]) * slope
      }
      function drawLine() {
        p5.stroke('rgb(255,0,0)')
        p5.line(0, endYs[0], canvasSize[0], endYs[1])
      }
      function writeFormula() {
        p5.textFont('monospace', 25)
        p5.textAlign('right', 'bottom')
        p5.strokeWeight(0)
        p5.text(`y = ${slope.toFixed(2)}x`, ...canvasSize)
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
