
window.addEventListener('load', () => {
    const playButton= document.getElementById('playButton')
    const restartButton= document.getElementById('restart-button')
    function gameStart() {
      document.getElementById('game-intro').style.display= 'none'
      document.getElementById('game-screen').style.display= 'flex'
  }
  playButton.addEventListener('click', function() {
      gameStart()
  })
  })
  