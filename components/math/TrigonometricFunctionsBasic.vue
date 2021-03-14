<template>
  <div class="overflow-x-auto">
    <div ref="container"></div>
  </div>
</template>
<script>
import P5 from 'p5'
export default {
  data() {
    return { p5: undefined }
  },
  mounted() {
    if (this.p5) return
    const sketch = (p5) => {
      const canvasSize = 500
      const O = 100
      const r = 50
      let t = 0
      const speed = 0.005
      let x, y
      p5.setup = () => {
        p5.createCanvas(canvasSize, canvasSize)
      }
      p5.draw = () => {
        t += speed
        p5.background(255)
        updateXY()
        drawAxes()
        drawCircle()
        drawRadian()
        drawCos()
        drawSin()
        drawPoint()
      }
      function updateXY() {
        x = getX()
        y = getY()
      }
      function getX(_t = t) {
        return O + r * Math.sin(_t * Math.PI)
      }
      function getY(_t = t) {
        return O + r * Math.cos(_t * Math.PI)
      }
      function drawAxes() {
        p5.strokeWeight(1)
        p5.stroke('rgb(0,200,0)')
        p5.line(0, O, canvasSize, O)
        p5.line(O, 0, O, canvasSize)
      }
      function drawCircle() {
        p5.strokeWeight(1)
        p5.stroke(0)
        p5.noFill()
        p5.circle(O, O, r * 2)
      }
      function drawRadian() {
        p5.strokeWeight(1)
        p5.stroke(0)
        p5.line(O, O, x, y)
      }
      function drawPoint() {
        p5.stroke(0)
        p5.fill(0)
        p5.rect(x - 2, y - 2, 5, 5)
      }
      function drawCos() {
        p5.stroke('rgb(255,0,0)')
        p5.fill('rgb(255,0,0)')
        p5.strokeWeight(2)
        p5.line(x, y, O, y)
        let prevPoint = [O, y]
        for (let _x = 0; _x < canvasSize - O; _x++) {
          const y = getY(t - _x * speed)
          const newPoint = [_x + O, y]
          p5.line(...prevPoint, ...newPoint)
          prevPoint = [...newPoint]
        }
        p5.rect(O - 2, y - 2, 5, 5)
      }
      function drawSin() {
        p5.stroke('rgb(0,100,255)')
        p5.fill('rgb(0,100,255)')
        p5.strokeWeight(2)
        p5.line(x, y, x, O)
        let prevPoint = [x, O]
        for (let _y = 0; _y < canvasSize - O; _y++) {
          const x = getX(t - _y * speed)
          const newPoint = [x, _y + O]
          p5.line(...prevPoint, ...newPoint)
          prevPoint = [...newPoint]
        }
        p5.rect(x - 2, O - 2, 5, 5)
      }
    }
    this.p5 = new P5(sketch, this.$refs.container)
  },
}
</script>
