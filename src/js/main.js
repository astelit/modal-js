const zModal = zmodal({
  closeBtnShow: true,
  closeBtnInside: true,
  heading: 'Modal Window',
  content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit amet.</p>
  `,
  width: '500px'
})

setTimeout(function() {
  zModal.open()
}, 2000)

// setTimeout(function() {
//   zModal.setContent(`<p>Новый контент</p>`)
// }, 4000)
//
// setTimeout(function() {
//   zModal.close()
// }, 6000)
//
// setTimeout(function() {
//   zModal.destroy()
// }, 8000)
