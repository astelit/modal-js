function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('z-modal')
  modal.insertAdjacentHTML('afterbegin', `
      <div class="z-modal__overlay">
          <div class="z-modal__window">
              <div class="z-modal__header">
                  <div class="z-modal__heading">Modal Heading</div>
                  <button class="z-modal__close"></button>
              </div>
              <div class="z-modal__main">
                  <div class="z-editor">
                      <p>Lorem ipsum dolor sit.</p>
                      <p>Lorem ipsum dolor sit.</p>
                  </div>
              </div>
              <div class="z-modal__footer">
                  <div class="z-modal__btns">
                      <button type="button" class="z-modal__btn">Ok</button>
                      <button type="button" class="z-modal__btn">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  `)
  document.body.appendChild(modal)
  return modal
}

modal = function(options) {
  const ANIMATION_DELAY = 700
  const $modal = _createModal(options)
  let closing = false
  return {
    open() {
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
    },
    destroy() {}
  }  
}

