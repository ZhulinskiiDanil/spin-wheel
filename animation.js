const animationSession = {
  RUNNED: false
}

function runAnimation(callback = () => {}) {
  if (animationSession.RUNNED) return
  animationSession.RUNNED = true

  const list = document.querySelector(".list")
  list.style.transition = `${settings.DELAY / 1000}s ease`

  requestAnimationFrame(() => {
    list.style.transform = `rotate(${settings.SPINS * 360}deg)`
    function onTransitionEnd() {
      animationSession.RUNNED = false
      restoreAnimation()
      callback()
      removeListEvent()
    }

    list.addEventListener('transitionend', onTransitionEnd)

    function removeListEvent() {
      list.removeEventListener('transitionend', onTransitionEnd)
    }
  })
}

function restoreAnimation() {
  const list = document.querySelector(".list")
  list.style.transition = `none`

  requestAnimationFrame(() => {
    list.style.transform = `none`
  })
}