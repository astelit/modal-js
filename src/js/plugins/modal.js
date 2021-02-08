Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createButtons(buttons = []) {
  console.log(buttons)
  const buttonsWrap = document.createElement('div')
  buttonsWrap.classList.add('z-modal__btns')


  buttons.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.className = btn.classes
    $btn.classList.add('z-modal__btn')
    $btn.onclick = btn.handler || noop
    buttonsWrap.appendChild($btn)
  })
  return buttonsWrap
}

function _createModal(options) {
  const zmodal = document.createElement('div')
  const size = options.width ? `style="--z-modal_size: ${options.width}"` : ''
  zmodal.classList.add('z-modal')
  zmodal.insertAdjacentHTML('afterbegin', `
      <div class="z-modal__overlay" data-zmodal="close">
          <div class="z-modal__window" ${size}>
              ${options.closeBtnShow && !options.closeBtnInside
                ? `<button class="z-modal__close" data-zmodal="close"></button>`
                : ''}
              <div class="z-modal__header">
                  <div class="z-modal__heading">${options.heading || ''}</div>
                  ${options.closeBtnShow && options.closeBtnInside
                    ? `<button class="z-modal__close"
                               data-zmodal="close"></button>`
                    : ''}
              </div>
              <div class="z-editor z-modal__main" data-zmodal="content">
                  ${options.content || ''}
              </div>
              <div class="z-modal__footer" data-zmodal="footer"></div>
          </div>
      </div>
  `)
  if (options.footerButtons) {
    const footerButtons = _createButtons(options.footerButtons)
    zmodal.querySelector('[data-zmodal="footer"]')
        .appendChild(footerButtons)
  }
  document.body.appendChild(zmodal)
  return zmodal
}

zmodal = function(options) {
  const ANIMATION_DELAY = 700
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const zmodal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
      !closing && $modal.classList.add('is_active')
    },
    close() {
      closing = true
      $modal.classList.remove('is_active')
      $modal.classList.add('is_closing')
      setTimeout(() => {
        $modal.classList.remove('is_closing')
        closing = false
      }, ANIMATION_DELAY)
    }
  }

  const listener = event => {
    if (event.target.dataset.zmodal === 'close') {
      zmodal.close()
    }
  }

  $modal.addEventListener('click', listener)

  return Object.assign(zmodal, {
    setContent(html) {
      $modal.querySelector('[data-zmodal="content"]').innerHTML = html
    },
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listener)
      destroyed = true
    }
  })
}
