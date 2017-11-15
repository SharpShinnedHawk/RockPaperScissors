function userClickRock() {
    document.getElementById('user-choice').src = "rps/images/rock.png"
}
function userClickPaper() {
  document.getElementById('user-choice').src = "rps/images/paper.png"
}
function userClickScissors() {
  document.getElementById('user-choice').src = "rps/images/scissors.png"
}
var ImageArray = ['rock', 'paper', 'scissors']
function computerChoice() {
  num = Math.floor( Math.random() * ImageArray.length)
  img = ImageArray[num]
  imgString = 'rps/images/' + img + '.png'
  document.getElementById('comp-choice').src = imgString
}
