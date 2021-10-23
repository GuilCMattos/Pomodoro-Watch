var start = document.getElementById('start')
var reset = document.getElementById('reset')
var stop = document.getElementById('stop')

var wm = document.getElementById('w_minutes')
var ws = document.getElementById('w_seconds')

var bm = document.getElementById('b_minutes')
var bs = document.getElementById('b_seconds')

var startTimer

start.addEventListener('click', function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
  } else {
    alert('Timer is alredy running')
  }
})

reset.addEventListener('click', function () {
  wm.innerText = 25
  ws.innerText = '00'

  bm.innerText = 5
  bs.innerText = '00'

  document.getElementById('counter').innerText = 0

  stopInterval()
})

stop.addEventListener('click', () => {
  stopInterval()
  startTimer = undefined
})

function timer() {
  // Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59
    wm.innerText--
  }
  // Break Timer Countdown
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59
      bm.innerText--
    }
  }
  // Increment Counter By one if one full cycle is complete
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25
    ws.innerText = '00'

    bm.innerText = 5
    bs.innerText = '00'

    document.getElementById('counter').innerText++

    bm
  }
}

//stop timer function
function stopInterval() {
  clearInterval(startTimer)
}
