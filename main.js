var randomColor1 = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
var randomColor2 = '#'+ ('000000' + Math.floor(Math.random()*16777113).toString(16)).slice(-6);
var randomColor3 = '#'+ ('000000' + Math.floor(Math.random()*16777123).toString(16)).slice(-6);

//create new rows of rect every 1 min
var myVar = setInterval(createNewRow, 10000)

function createNewRow() {
  $(".row").prepend(
  `<div class = "ballsSet1" ></div>
  <div class = "ballsSet2" ></div>
  <div class = "ballsSet3" ></div>`)

  $(".ballsSet1").css('background-color', randomColor2)
  $(".ballsSet2").css('background-color', randomColor1)
  $(".ballsSet3").css('background-color', randomColor3)


}

$(".ballsSet1").css('background-color', randomColor1)
$(".ballsSet2").css('background-color', randomColor2)
$(".ballsSet3").css('background-color', randomColor3)



const chooseColor = function () {
  let color = [randomColor1, randomColor2, randomColor3]
  colorToChoose = color[Math.floor(Math.random() * color.length)]
  return colorToChoose
}

$("#shootBall").css('background-color', chooseColor())

$("#shootBall").css({left: 350, top: 400})






//click to shoot, collision, reset
const clickShootEvent = function () {
$("#shootBall").click(function() {
  $("#shootBall").animate({
    top: "-=350"

  }, 1000, function() {

const afterHit = function () {
  if (collision($("#shootBall"), $(".ballsSet1"))) {
    if ($("#shootBall").css('background-color') === $(".ballsSet1").css('background-color')) {
      $("#shootBall").hide()
      $(".ballsSet1").hide()
        resetShooting()
    }
  }

  if (collision($("#shootBall"), $(".ballsSet2"))) {
    if ($("#shootBall").css('background-color') === $(".ballsSet2").css('background-color')) {
      $("#shootBall").hide()
      $(".ballsSet2").hide()
        resetShooting()
    }
  }

  if (collision($("#shootBall"), $(".ballsSet3"))) {
    if ($("#shootBall").css('background-color') === $(".ballsSet3").css('background-color')) {
      $("#shootBall").hide()
      $(".ballsSet3").hide()
      return resetShooting()
    }
  }

}

afterHit()

function resetShooting() {
  $("body").prepend(`<div id = "shootBall"></div>`)
  $("#shootBall").css('background-color', chooseColor())
  $("#shootBall").css({left: 350, top: 400})
  return clickShootEvent()
}

// function scoreAdd() {
//   let t = 0
//   if ($("#shootBall").hide()) {
//     newT = t + 5
//   }
//   $("#score").html(newT)
// }

});

});
}
clickShootEvent()

//arrow keys to move the shooting rectangle
$(document).keydown(function (e) {
  switch (e.which) {
    case 37:
      $("#shootBall").finish().animate({left:"-=10"})
      break;

    case 38:
      $("#shootBall").finish().animate({top:"-=10"})
      break;

    case 39:
      $("#shootBall").finish().animate({left:"+=10"})
      break;

    case 40:
      $("#shootBall").finish().animate({top:"+=10"})
      break;

  }
})



// Collision Detection
const collision = function (rect1, rect2) {
  let r1x = rect1.offset().left
  let r1y = rect1.offset().top
  let r1w = rect1.width()
  let r1h = rect1.height()
  let r2x = rect2.offset().left
  let r2y = rect2.offset().top
  let r2w = rect2.width()
  let r2h = rect2.height()

  if (r1x < (r2x +r2w) &&
      (r1x + r1w) > r2x &&
      r1y < (r2y + r2h) &&
      (r1y + r1h) > r2y) {
    return true
  }
}
