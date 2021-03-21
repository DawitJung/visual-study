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
      const canvasSize = [200, 500]
      const O = [100, 100]
      const r = 50
      let t = 0
      const speed = 0.005
      let x, y
      p5.setup = () => {
        p5.createCanvas(...canvasSize)
      }
      p5.draw = () => {
        t += speed
        p5.background(255)
        updateXY()
        drawAxes()
        drawCircle()
        drawRadian()
        drawSin()
        drawPoint()
      }
      function updateXY() {
        x = getX()
        y = getY()
      }
      function getX(_t = t) {
        return O[0] + r * Math.sin((_t + 0.5) * Math.PI)
      }
      function getY(_t = t) {
        return O[1] + r * Math.cos((_t + 0.5) * Math.PI)
      }
      function drawAxes() {
        p5.strokeWeight(1)
        p5.stroke('rgb(0,200,0)')
        p5.line(0, O[1], canvasSize[0], O[1])
        p5.line(O[0], 0, O[0], canvasSize[1])
      }
      function drawCircle() {
        p5.strokeWeight(1)
        p5.stroke(0)
        p5.noFill()
        p5.circle(...O, r * 2)
      }
      function drawRadian() {
        p5.strokeWeight(1)
        p5.stroke(0)
        p5.line(...O, x, y)
        p5.arc(...O, 20, 20, -t * Math.PI, 0)
      }
      function drawPoint() {
        p5.stroke(0)
        p5.fill(0)
        p5.rect(x - 2, y - 2, 5, 5)
      }
      function drawSin() {
        p5.stroke('rgb(0,100,255)')
        p5.fill('rgb(0,100,255)')
        p5.strokeWeight(2)
        p5.line(x, y, x, O[1])
        let prevPoint = [x, O[1]]
        for (let _y = 0; _y < canvasSize[1] - O[1]; _y++) {
          const x = getX(t - _y * speed)
          const newPoint = [x, _y + O[1]]
          p5.line(...prevPoint, ...newPoint)
          prevPoint = [...newPoint]
        }
        p5.rect(x - 2, O[1] - 2, 5, 5)
      }
    }
    this.p5 = new this.P5(sketch, this.$refs.container)
  },
}
</script>
