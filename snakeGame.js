let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let width = canvas.width
let height = canvas.height
let blockSize = 10
let widthInBlock = width/blockSize
let heightInBlock = height/blockSize
let score =0

const borderBox = function (){
    ctx.fillStyle = 'Gray'
    ctx.fillRect(0,0,width,blockSize)
    ctx.fillRect(0,height-blockSize,width,blockSize)
    ctx.fillRect(0,0,blockSize,height)
    ctx.fillRect(width-blockSize,0,blockSize,height)
}
borderBox()
const gameScore = function(){
    ctx.font = "20px Courier"
    ctx.fillStyle = 'Black'
    ctx.textAlign = "left" // or "Left"
    ctx.textBaseline = 'top'
    ctx.fillText("Score :" +score,blockSize,blockSize)


}
gameScore()
