<template>
  <div class="overflow-x-auto relative w-max">
    <div ref="container"></div>
    <p ref="formula" class="absolute top-0 left-0"></p>
  </div>
</template>
<script>
export default {
  data() {
    return { p5: undefined, slope: 0 }
  },
  mounted() {
    if (this.p5) return
    const sketch = (p5) => {
      const canvasSize = [300, 300]
      const O = [150, 150]
      const slopeIncrementPS = 0.01
      const endYs = [150, 150]
      p5.setup = () => {
        p5.createCanvas(...canvasSize)
      }
      p5.draw = () => {
        p5.background(255)
        drawAxes.apply(this)
        updateSlope.apply(this)
        updateEndYs.apply(this)
        drawLine.apply(this)
        writeFormula.apply(this)
      }
      function updateSlope() {
        this.slope += slopeIncrementPS
      }
      function updateEndYs() {
        endYs[0] = O[0] + O[0] * this.slope
        endYs[1] = O[0] - (canvasSize[0] - O[0]) * this.slope
      }
      function drawLine() {
        p5.stroke('rgb(255,0,0)')
        p5.line(0, endYs[0], canvasSize[0], endYs[1])
      }
      function writeFormula() {
        this.$katex.render(`y = ${this.slope.toFixed(2)}x`, this.$refs.formula)
      }
      function drawAxes() {
        p5.strokeWeight(1)
        p5.stroke('rgb(0,200,0)')
        p5.line(0, O[1], canvasSize[0], O[1])
        p5.line(O[0], 0, O[0], canvasSize[1])
      }
    }
    this.p5 = new this.$P5(sketch, this.$refs.container)
  },
}
</script>
