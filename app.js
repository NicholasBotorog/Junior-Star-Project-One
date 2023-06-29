function init() {
  //Elements
  const timeLeftDisplay = document.querySelector('#time-left')
  const yourScore = document.querySelector('#your-score')
  const startButton = document.querySelectorAll('.start')
  const restartButton = document.querySelectorAll('.restart')
  const popUps = document.querySelectorAll('.popUp')
  const popGameOver = document.querySelector('.gameOverOverlay')
  const popGoal = document.querySelector('.goalOverlay')
  const popDraw = document.querySelector('.drawOverlay')
  const winnerPop = document.querySelector('.winnerOverlay')

  let score = 0
  const scoreStart = 0
  yourScore.innerHTML = score

  const grid = document.querySelector('.grid')
  const cells = document.querySelectorAll('.cell')
  const width = 10

  const player = 'player'
  const startPosition = 85
  let currentPosition = startPosition

  const finalWhistle = document.querySelector('#finalWhistle')
  function finalWhistlePlay() {
    finalWhistle.currentTime = 0
    finalWhistle.play()
  }

  const movePlayerSound = document.querySelector('#movePlayerSound')
  function movePlayerSoundPlay() {
    movePlayerSound.currentTime = 0
    movePlayerSound.play()
  }

  const passPlayerSound = document.querySelector('#passPlayer')
  function passPlayerSoundPlay() {
    passPlayerSound.play()
  }

  const gameSound = document.querySelector('#gameSound')
  function gameSoundPlay() {
    gameSound.currentTime = 0
    gameSound.play()
  }

  const colosionSound = document.querySelector('#colosionSound')
  function colosionSoundPlay() {
    colosionSound.currentTime = 0
    colosionSound.play()
  }

  const winSound = document.querySelector('#winner')
  function winSoundPlay() {
    winSound.play()
  }

  const goalSound = document.querySelector('#goalSound')
  function goalSoundPlay() {
    goalSound.play()
  }

  const loseSound = document.querySelector('#loseSound')
  function loseSoundPlay() {
    loseSound.play()
  }

  const drawSound = document.querySelector('#drawSound')
  function drawSoundPlay() {
    drawSound.play()
  }

  const outSound = document.querySelector('#outSound')
  function outSoundPlay() {
    outSound.currentTime = 0
    outSound.play()
  }

  function addPlayer(position) {
    movePlayerSoundPlay()
    cells[position].classList.add(player)
  }

  function removePlayer(position) {
    cells[position].classList.remove(player)
  }

  function resetGame() {
    window.location.reload()
    playGame()
  }

  addPlayer(startPosition)

  function movePlayer(event) {
    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39

    removePlayer(currentPosition)
    if (key === right && currentPosition % width !== width - 1) {
      currentPosition++
    } else if (key === left && currentPosition % width !== 0) {
      currentPosition--
    } else if (key === down && currentPosition + width < width * width - 10) {
      currentPosition += width
    } else if (key === up && currentPosition >= width) {
      currentPosition -= width
    }
    addPlayer(currentPosition)
    passPlayer()
  }

  let timeLeft = 75

  const passedPosition = 22
  function passPlayer() {
    if (cells[69].classList.contains(player)) {
      passPlayerSoundPlay()
      cells[currentPosition].classList.remove(player)
      currentPosition = passedPosition
      addPlayer(currentPosition)
    }
  }

  document.addEventListener('keydown', movePlayer)

  //OBSTACLES

  // ? defender
  const defenderRowIndex = 7
  const defenderSpace = 4
  const defenderStartIndex = width * defenderRowIndex
  const defenders = Array.from(cells).slice(
    defenderStartIndex,
    defenderStartIndex + width
  )

  // ? keeper
  const keeperRowIndex = 7
  const keeperSpace = 2
  const keeper = Array.from(cells).slice(
    (width / 5) * keeperRowIndex,
    (width / 5) * (keeperRowIndex + 1)
  )

  // ? defendingLine
  const defendingLineIndex1 = 4
  const defendingLineSpace = 3
  const defendingLine1 = Array.from(cells).slice(
    width * defendingLineIndex1,
    width * (defendingLineIndex1 + 1)
  )

  const defendingLineIndex2 = 5
  const defendingLineSpace2 = 2
  const defendingLine2 = Array.from(cells).slice(
    width * defendingLineIndex2,
    width * (defendingLineIndex2 + 1)
  )

  let counter = 0

  function run() {
    counter++
    cells.forEach((cell) =>
      cell.classList.remove(
        'defender',
        'keeper',
        'defendingLine',
        'defendingLine2'
      )
    )
    defenders.forEach((defender, index) => {
      if (index % defenderSpace === counter % defenderSpace) {
        defender.classList.add('defender')

        if (index + width * defenderRowIndex === currentPosition) {
          colosionSoundPlay()
          outcomeTimer
        }
      }
    })
    keeper.forEach((keeper, index) => {
      if (index % keeperSpace === counter % keeperSpace) {
        keeper.classList.add('keeper')

        if (index + (width / 5) * keeperRowIndex === currentPosition) {
          colosionSoundPlay()
          outcomeTimer
        }
      }
    })
    defendingLine1.forEach((defendingLine, index) => {
      if (
        index % defendingLineSpace ===
        defendingLineSpace - 1 - (counter % defendingLineSpace)
      ) {
        defendingLine.classList.add('defendingLine')

        if (index + width * defendingLineIndex1 === currentPosition) {
          colosionSoundPlay()
          outcomeTimer
        }
      }
    })
    defendingLine2.forEach((defendingLine2, index) => {
      if (index % defendingLineSpace2 === counter % defendingLineSpace2) {
        defendingLine2.classList.add('defendingLine2')

        if (index + width * defendingLineIndex2 === currentPosition) {
          colosionSoundPlay()
          outcomeTimer
        }
      }
    })
  }

  function lose() {
    if (cells[currentPosition].classList.contains('fans')) {
      removePlayer(currentPosition)
      currentPosition = startPosition
      addPlayer(startPosition)
      finalWhistlePlay()
    }
    if (
      cells[currentPosition].classList.contains('defender') ||
      cells[currentPosition].classList.contains('defendingLine') ||
      cells[currentPosition].classList.contains('defendingLine2') ||
      cells[currentPosition].classList.contains('keeper') ||
      cells[currentPosition].classList.contains('fans')
    ) {
      removePlayer(currentPosition)
      currentPosition = startPosition
      addPlayer(startPosition)
      colosionSoundPlay()
    }
  }

  function timeMoving() {
    timeLeft++
    timeLeftDisplay.innerHTML = timeLeft
    if (timeLeftDisplay.innerHTML >= 90 && score < 2) {
      outSoundPlay()
      finalWhistlePlay()
      timeLeft = 75
      yourScore.innerHTML = scoreStart
      popGameOver.classList.add('active')
    } else if (timeLeftDisplay.innerHTML >= 90 && score === 2) {
      finalWhistlePlay()
      timeLeft = 75
      yourScore.innerHTML = scoreStart
      popDraw.classList.add('active')
      drawSoundPlay()
    } else if (timeLeftDisplay.innerHTML >= 90 && score > 2) {
      finalWhistlePlay()
      winnerPop.classList.add('active')
      winSoundPlay()
    }
  }

  function goal() {
    if (
      cells[currentPosition] === cells[4] ||
      cells[currentPosition] === cells[5]
    ) {
      score++
      if (score === 1) {
        speedIncrease(200)
      } else if (score === 2) {
        speedIncrease(100)
      } else if (score > 2) {
        speedIncrease(90)
      } else if (score > 3) {
        speedIncrease(50)
      }
      removePlayer(currentPosition)
      currentPosition = startPosition
      addPlayer(startPosition)
      yourScore.innerHTML = score
      popGoal.classList.add('active')
      goalSound.play()
    }
  }

  function checkOutcomes() {
    lose()
    goal()
  }

  let outcomeTimer = null
  outcomeTimer = setInterval(checkOutcomes, 100)

  let game
  function speedIncrease(time) {
    clearInterval(game)
    game = setInterval(run, time)
  }

  function playGame() {
    clearInterval(timeMoving)
    setInterval(timeMoving, 1000)
    gameSoundPlay()
    speedIncrease(500)
    popUps.forEach((popUp) => popUp.classList.remove('active'))
  }

  startButton.forEach((btn) => btn.addEventListener('click', playGame))
  restartButton.forEach((btn) => btn.addEventListener('click', resetGame))
  const skip = document.querySelector('.continue')
  function skipAd() {
    popUps.forEach((popUp) => popUp.classList.remove('active'))
  }
  skip.addEventListener('click', skipAd)
}
window.addEventListener('load', init)
