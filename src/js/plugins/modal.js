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
                  <button type="button" class="z-btn">Ok</button>
                  <button type="button" class="z-btn">Cancel</button>
              </div>
          </div>
      </div>
  `)
  document.body.appendChild(modal)
  return modal
}

$.modal = function(options) {
  // eslint-disable-next-line no-unused-vars
  const $modal = _createModal(options)
  return {
    open() {},
    close() {},
    destroy() {}
  }  
}
