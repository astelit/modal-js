zconfirm = function(options) {
  return new Promise((resolve, reject) => {
    const zModal = zmodal({
      closeBtnShow: true,
      closeBtnInside: true,
      heading: options.heading,
      content: options.content,
      onClose() {
        zModal.destroy()
      },
      footerButtons: [
        {
          text: 'Отменить', classes: 'z-btn z-btn_main', handler() {
            zModal.close()
            reject()
          }
        },
        {
          text: 'Удалить', classes: 'z-btn z-btn_main', handler() {
            zModal.close()
            resolve()
          }
        }
      ]
    })
    zModal.open()
  })
}
